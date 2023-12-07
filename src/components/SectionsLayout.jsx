import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "../states/sectionMenuSlice";
import style from "../assets/SCSS/components/SectionsLayout.module.scss";

export default function SectionsLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/"
        onClick={() => {
          if (location.pathname === "/") {
            window.scrollTo(0, 0);
            dispatch(close());
          } else {
            dispatch(close());
          }
        }}
        className={style.section}
      >
        Home Page
      </Link>
      <Link
        to="/section/us"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        U.S.
      </Link>
      <Link
        to="/section/politics"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Politics
      </Link>
      <Link
        to="/section/nyregion"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        N.Y.
      </Link>
      <Link
        to="/section/world"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        World
      </Link>
      <Link
        to="/section/business"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Business
      </Link>
      <Link
        to="/section/arts"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Arts
      </Link>
      <Link
        to="/section/opinion"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Opinion
      </Link>
      <Link
        to="/section/health"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Health
      </Link>
      <Link
        to="/section/realestate"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Real Estate
      </Link>
      <Link
        to="/section/technology"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Technology
      </Link>
      <Link
        to="/section/books"
        onClick={() => dispatch(close())}
        className={style.section}
      >
        Books
      </Link>
    </>
  );
}
