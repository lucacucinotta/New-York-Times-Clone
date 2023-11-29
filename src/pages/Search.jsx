import { useSelector, useDispatch } from "react-redux";
import { change } from "../app/searchMenuSlice";
import { close } from "../app/sectionMenuSlice";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionsLayout from "../components/SectionsLayout";
import SearchNews from "../components/SearchNews";
import Footer from "../components/Footer";
import style from "../assets/SCSS/pages/Search.module.scss";

export default function Search() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchMenuState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchQuery } = useParams();

  const fetchNews = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`
    );
    return await res.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["news", searchQuery],
    queryFn: fetchNews,
    enabled: !!searchQuery,
    onSuccess: () => dispatch(change("")),
  });

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
            <h3>News</h3>
            <div className={style.sectionList}>
              <SectionsLayout />
            </div>
          </div>
        </div>
      ) : (
        <>
          <main>
            {isLoading ? (
              <div>Is Loading</div>
            ) : (
              <div className={style.newsContainer}>
                <div className={style.preNews}>
                  <p className={style.preTitle}>Showing result for : </p>
                  <h1 className={style.searchTitle}>{searchQuery}</h1>
                </div>
                {data.response.docs.lenght === 0 ? (
                  <p>No results found</p>
                ) : (
                  data.response.docs.map((news) => (
                    <SearchNews key={news.headline.main} newsProp={news} />
                  ))
                )}
              </div>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

// import { useParams } from "react-router-dom";

// export default function Search() {
//   const { searchQuery } = useParams();

//   return <h1>{searchQuery}</h1>;
// }
