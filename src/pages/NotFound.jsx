import { useSelector, useDispatch } from "react-redux";
import { change } from "../app/searchMenuSlice";
import { close } from "../app/sectionMenuSlice";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionsLayout from "../components/SectionsLayout";
import Footer from "../components/Footer";
import style from "../assets/SCSS/pages/NotFound.module.scss";

export default function NotFound() {
  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchMenuState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <div className={style.notFoundDiv}>
              <div>
                <Link to="/" className={style.redirect}>
                  Go to Home Page »
                </Link>
                <h1>Page Not Found</h1>
              </div>
              <p className={style.notFoundMessage}>
                We’re sorry, we seem to have lost this page, but we don’t want
                to lose you
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
                  placeholder="Search NYTimes.com"
                  value={searchData}
                  onChange={(e) => dispatch(change(e.target.value))}
                  className={style.notFoundBar}
                />
                <button className={style.notFoundButton}>GO</button>
              </form>
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
