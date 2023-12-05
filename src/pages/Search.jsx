import { useSelector, useDispatch } from "react-redux";
import { change } from "../states/searchBarSlice";
import { close } from "../states/sectionMenuSlice";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import axios from "axios";
import Navbar from "../components/Navbar";
import SectionsLayout from "../components/SectionsLayout";
import SearchArticle from "../components/SearchArticle";
import Footer from "../components/Footer";
import style from "../assets/SCSS/pages/Search.module.scss";

export default function Search() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchQuery } = useParams();

  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`
    );
    return res.data.response.docs;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", searchQuery],
    queryFn: fetchArticle,
    enabled: !!searchQuery,
    onSuccess: () => dispatch(change("")),
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
          <div className={style.sectionDiv}>
            <h3>Sections</h3>
            <div className={style.sectionList}>
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
                <div className={style.preArticle}>
                  <p className={style.preTitle}>Showing result for : </p>
                  <h1 className={style.searchTitle}>{searchQuery}</h1>
                </div>
                <div className={style.articleContainer}>
                  {data === 0 ? (
                    <p>No results found</p>
                  ) : (
                    data.map((article) => (
                      <SearchArticle
                        key={article.headline.main}
                        articleProp={article}
                      />
                    ))
                  )}
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
