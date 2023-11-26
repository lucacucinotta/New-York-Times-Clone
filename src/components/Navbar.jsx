import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import style from "../assets/SCSS/Navbar.module.scss";
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

  return (
    <nav>
      <div className={style.navWrapper}>
        <FontAwesomeIcon icon={faBars} />
        <img src={Logo} />
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={style.navDate}>
        <p>{formatDate}</p>
      </div>
    </nav>
  );
}
