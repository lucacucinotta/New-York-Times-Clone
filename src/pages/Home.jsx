import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "../components/News";
import SectionsLayout from "../components/SectionsLayout";
import style from "../assets/SCSS/pages/Page.module.scss";

export default function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.menuState);

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
          <form className={style.searchForm}>
            <input
              type="text"
              placeholder="SEARCH"
              className={style.searchBar}
            />
            <button className={style.searchButton}>GO</button>
          </form>
          <div className={style.sectionDiv}>
            <h3>News</h3>
            <SectionsLayout />
          </div>
        </div>
      ) : (
        <>
          <main>
            {isLoading ? (
              <div>Is Loading</div>
            ) : (
              <div className={style.newsContainer}>
                {data.results.map((news, index) => (
                  <News
                    key={index}
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
