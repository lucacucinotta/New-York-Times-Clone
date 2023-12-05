import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../states/sectionMenuSlice";
import { change } from "../states/searchBarSlice";
import { show, hide } from "../states/searchBarShownSlice";
import { Link, useNavigate } from "react-router-dom";
import SectionsLayout from "./SectionsLayout";
import style from "../assets/SCSS/components/Navbar.module.scss";
import Logo from "../assets/img/logo.svg";

export default function Navbar() {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = weekday[date.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];

  const formatDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);
  const { isShown } = useSelector((state) => state.searchBarShownState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <nav>
      <div className={style.navWrapper}>
        <div className={style.searchDiv}>
          {isOpen ? (
            <div className={style.empty}></div>
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className={style.icon}
              onClick={() => dispatch(open())}
            />
          )}
          <FontAwesomeIcon
            icon={faSearch}
            className={style.icon}
            onClick={() => {
              if (isShown) {
                dispatch(hide());
              } else {
                dispatch(show());
              }
            }}
          />
        </div>
        <Link to="/">
          <img
            src={Logo}
            className={style.logo}
            onClick={() => dispatch(close())}
          />
        </Link>
        {isOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className={style.icon}
            onClick={() => dispatch(close())}
          />
        ) : (
          <div className="empty"></div>
        )}
      </div>
      {!isOpen && (
        <div className={style.navDate}>
          <p>{formatDate}</p>
        </div>
      )}
      <div className={style.navSections}>
        <SectionsLayout />
      </div>
      {isShown && (
        <div className={style.searchBarDiv}>
          <form
            className={style.searchForm}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(hide());
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
        </div>
      )}
    </nav>
  );
}
