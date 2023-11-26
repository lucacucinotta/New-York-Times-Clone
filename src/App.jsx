import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import style from "./assets/SCSS/App.module.scss";

export default function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([]);

  const fetchNews = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    const data = await res.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={style.newsContainer}>
          {data.map((news, index) => (
            <News key={index} newsProp={news} showAllInfo={index % 3 === 0} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
