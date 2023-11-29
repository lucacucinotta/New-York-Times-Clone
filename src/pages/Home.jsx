import { useSelector, useDispatch } from "react-redux";
import { change } from "../app/searchMenuSlice";
import { close } from "../app/sectionMenuSlice";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import SectionsLayout from "../components/SectionsLayout";
import News from "../components/News";
import Footer from "../components/Footer";
import style from "../assets/SCSS/pages/Home.module.scss";

export default function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchMenuState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchNews = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    return await res.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
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
              <div className={style.loadingDiv}>
                <DotLoader size={200} color="#c7c7c7" />
              </div>
            ) : (
              <div className={style.newsContainer}>
                {data.results.map((news, index) => (
                  <News
                    key={news.title}
                    newsProp={news}
                    showAllInfo={index % 3 === 0}
                  />
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
