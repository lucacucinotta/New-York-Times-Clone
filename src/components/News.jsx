import style from "../assets/SCSS/components/News.module.scss";
import PropTypes from "prop-types";

export default function News({ newsProp, showAllInfo }) {
  return (
    <>
      <div className={style.newsCard}>
        <p className={style.newsLabel}>
          {(() => {
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
          })()}
        </p>
        <a
          href={newsProp.url}
          target="_blank"
          rel="noopener noreferrer"
          className={style.newsTitle}
        >
          <h1>{newsProp.title}</h1>
        </a>
        <span className={style.newsCreator}>{newsProp.byline}</span>
        {showAllInfo && (
          <>
            <p className={style.newsBody}>{newsProp.abstract}</p>
            <img src={newsProp.multimedia[0].url} />
            <span className={style.copyright}>
              {newsProp.multimedia[0].copyright}
            </span>
          </>
        )}
      </div>
    </>
  );
}

News.propTypes = {
  newsProp: PropTypes.object.isRequired,
  showAllInfo: PropTypes.bool.isRequired,
};
