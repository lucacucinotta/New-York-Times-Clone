import { useSelector, useDispatch } from "react-redux";
import { change } from "/src/states/searchBarSlice";
import { close } from "/src/states/sectionMenuSlice";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "/src/components/Navbar/Navbar";
import SectionsLayout from "/src/components/SectionsLayout/SectionsLayout";
import Article from "/src/components/Article/Article";
import Footer from "/src/components/Footer/Footer";
import style from "./HomePage.module.scss";

export default function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    return res.data.results;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article"],
    queryFn: fetchArticle,
  });

  if (isError) {
    navigate(`*`);
    console.log(error.message);
  }

  return (
    <>
      <Helmet>
        <title>The New York Times | Luca Cucinotta</title>
      </Helmet>
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
              <div className={style.articleContainer}>
                {data.map((article) => (
                  <Article key={article.title} articleProp={article} />
                ))}
              </div>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
