import { useSelector, useDispatch } from "react-redux";
import { change } from "/src/states/searchBarSlice.js";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "/src/components/Navbar/Navbar";
import Footer from "/src/components/Footer/Footer";
import style from "./NotFoundPage.module.scss";

export default function NotFound() {
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Not Found - The New York Times Clone</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={style.container}>
          <div className={style.notFoundDiv}>
            <div>
              <Link to="/" className={style.redirect}>
                Go to Home Page »
              </Link>
              <h1>Page Not Found</h1>
            </div>
            <p className={style.notFoundMessage}>
              We’re sorry, we seem to have lost this page, but we don’t want to
              lose you
            </p>
            <form
              className={style.notFoundForm}
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search/${searchData}`);
              }}
            >
              <input
                type="text"
                placeholder="SEARCH"
                value={searchData}
                onChange={(e) => dispatch(change(e.target.value))}
                className={style.notFoundBar}
              />
              <button className={style.notFoundButton}>GO</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
