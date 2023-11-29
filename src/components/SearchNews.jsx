import style from "../assets/SCSS/components/News.module.scss";
import PropTypes from "prop-types";

export default function SearchNews({ newsProp }) {
  const date = new Date(newsProp.pub_date);
  const day = date.getDate();
  const year = date.getFullYear();

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

  const formatDate = `${month} ${day}, ${year}`;
  return (
    <>
      <div className={style.newsCard}>
        <div className={style.newsInfo}>
          <p className={style.newsLabel}>
            {(() => {
              switch (newsProp.section_name) {
                case "us":
                  return "U.S.";
                case "nyregion":
                  return "N.Y.";
                case "realestate":
                  return "Real Estate";
                default:
                  return newsProp.section_name;
              }
            })()}
          </p>
          <span className={style.newsPublishedDate}>{formatDate}</span>
        </div>
        <a
          href={newsProp.web_url}
          target="_blank"
          rel="noopener noreferrer"
          className={style.newsTitle}
        >
          <h1>{newsProp.headline.main}</h1>
        </a>
        <span className={style.newsCreator}>{newsProp.byLine}</span>
        <p className={style.newsBody}>{newsProp.abstract}</p>
      </div>
    </>
  );
}

SearchNews.propTypes = {
  newsProp: PropTypes.object.isRequired,
};
