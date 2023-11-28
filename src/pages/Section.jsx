import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "../components/News";
import SectionsLayout from "../components/SectionsLayout";
import style from "../assets/SCSS/pages/Page.module.scss";

export default function Section() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.menuState);

  const { sectionName } = useParams();

  const fetchNews = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${API_KEY}`
    );
    return await res.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["news", sectionName],
    queryFn: fetchNews,
    enabled: !!sectionName,
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
              <div>is Loading</div>
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
