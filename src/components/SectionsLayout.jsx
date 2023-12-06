import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "../states/sectionMenuSlice";

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
        style={{ color: "black", textDecoration: "none" }}
      >
        Home Page
      </Link>
      <Link
        to="/section/us"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        U.S.
      </Link>
      <Link
        to="/section/politics"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Politics
      </Link>
      <Link
        to="/section/nyregion"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        N.Y.
      </Link>
      <Link
        to="/section/world"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        World
      </Link>
      <Link
        to="/section/business"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Business
      </Link>
      <Link
        to="/section/arts"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Arts
      </Link>
      <Link
        to="/section/opinion"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Opinion
      </Link>
      <Link
        to="/section/health"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Health
      </Link>
      <Link
        to="/section/realestate"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Real Estate
      </Link>
      <Link
        to="/section/technology"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Technology
      </Link>
      <Link
        to="/section/books"
        onClick={() => dispatch(close())}
        style={{ color: "black", textDecoration: "none" }}
      >
        Books
      </Link>
    </>
  );
}
