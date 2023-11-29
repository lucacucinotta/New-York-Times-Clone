import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../app/sectionMenuSlice";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();

  return (
    <nav>
      <div className={style.navWrapper}>
        {isOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className={style.icon}
            onClick={() => dispatch(close())}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className={style.icon}
            onClick={() => dispatch(open())}
          />
        )}
        <Link to="/">
          <img
            src={Logo}
            className={style.logo}
            onClick={() => dispatch(close())}
          />
        </Link>
        <FontAwesomeIcon icon={faUser} className={style.icon} />
      </div>
      {!isOpen && (
        <div className={style.navDate}>
          <p>{formatDate}</p>
        </div>
      )}
    </nav>
  );
}
