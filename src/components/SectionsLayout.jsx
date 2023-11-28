import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "../app/menuSlice";
import style from "../assets/SCSS/components/SectionsLayout.module.scss";

export default function SectionsLayout() {
  const dispatch = useDispatch();
  return (
    <div className={style.sectionList}>
      <Link
        to="/section/us"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        U.S.
      </Link>
      <Link
        to="/section/politics"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Politics
      </Link>
      <Link
        to="/section/nyregion"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        N.Y.
      </Link>
      <Link
        to="/section/world"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        World
      </Link>
      <Link
        to="/section/business"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Business
      </Link>
      <Link
        to="/section/arts"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Arts
      </Link>
      <Link
        to="/section/opinion"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Opinion
      </Link>
      <Link
        to="/section/health"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Health
      </Link>
      <Link
        to="/section/realestate"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Real Estate
      </Link>
      <Link
        to="/section/technology"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Technology
      </Link>
      <Link
        to="/section/books"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Books
      </Link>
      <Link
        to="/section/food"
        className={style.link}
        onClick={() => dispatch(close())}
      >
        Food
      </Link>
    </div>
  );
}
