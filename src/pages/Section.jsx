import { useSelector, useDispatch } from "react-redux";
import { change } from "../states/searchBarSlice";
import { close } from "../states/sectionMenuSlice";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import axios from "axios";
import Navbar from "../components/Navbar";
import SectionsLayout from "../components/SectionsLayout";
import Article from "../components/Article";
import Footer from "../components/Footer";
import style from "../assets/SCSS/pages/Section.module.scss";

export default function Section() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sectionName } = useParams();

  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${API_KEY}`
    );
    return res.data.results;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", sectionName],
    queryFn: fetchArticle,
    enabled: !!sectionName,
  });

  if (isError) {
    navigate(`*`);
    console.log(error.message);
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      {isOpen ? (
        <div className={style.searchDiv}>
          <form
            className={style.searchForm}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(close());
              navigate(`/search/${searchData}`);
            }}
          >
            <input
              type="text"
              placeholder="SEARCH"
              value={searchData}
              onChange={(e) => dispatch(change(e.target.value))}
              className={style.searchBar}
            />
            <button className={style.searchButton}>GO</button>
          </form>
          <div className={style.sectionsDiv}>
            <h3>Sections</h3>
            <div className={style.sectionsList}>
              <SectionsLayout />
            </div>
          </div>
        </div>
      ) : (
        <>
          <main>
            {isLoading ? (
              <div className={style.loadingDiv}>
                <DotLoader size={200} color="#c7c7c7" />
              </div>
            ) : (
              <>
                <h1 className={style.articleSection}>
                  {(() => {
                    switch (sectionName) {
                      case "us":
                        return "U.S.";
                      case "nyregion":
                        return "N.Y.";
                      case "realestate":
                        return "Real Estate";
                      default:
                        return sectionName;
                    }
                  })()}
                </h1>
                <div className={style.articleContainer}>
                  {data.map((article) => (
                    <Article key={article.title} articleProp={article} />
                  ))}
                </div>
              </>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
