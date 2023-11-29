import style from "../assets/SCSS/components/News.module.scss";
import PropTypes from "prop-types";

export default function News({ newsProp, showAllInfo }) {
  const date = new Date(newsProp.published_date);
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
      {newsProp.title ? (
        <div className={style.newsCard}>
          <div className={style.newsInfo}>
            <p className={style.newsLabel}>
              {newsProp.section
                ? (() => {
                    switch (newsProp.section) {
                      case "us":
                        return "U.S.";
                      case "nyregion":
                        return "N.Y.";
                      case "realestate":
                        return "Real Estate";
                      default:
                        return newsProp.section;
                    }
                  })()
                : null}
            </p>
            <span className={style.newsPublishedDate}>{formatDate}</span>
          </div>
          <a
            href={newsProp.url ? newsProp.url : null}
            target="_blank"
            rel="noopener noreferrer"
            className={style.newsTitle}
          >
            <h1>{newsProp.title ? newsProp.title : null}</h1>
          </a>
          <span className={style.newsCreator}>
            {newsProp.byline ? newsProp.byline : null}
          </span>
          {showAllInfo && (
            <>
              <p className={style.newsBody}>
                {newsProp.abstract ? newsProp.abstract : null}
              </p>
              {
                <img
                  src={newsProp.multimedia ? newsProp.multimedia[0].url : null}
                />
              }
              <span className={style.copyright}>
                {newsProp.multimedia ? newsProp.multimedia[0].copyright : null}
              </span>
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

News.propTypes = {
  newsProp: PropTypes.object.isRequired,
  showAllInfo: PropTypes.bool.isRequired,
};
