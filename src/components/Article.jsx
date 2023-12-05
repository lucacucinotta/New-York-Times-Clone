import style from "../assets/SCSS/components/Article.module.scss";
import PropTypes from "prop-types";

export default function Article({ articleProp }) {
  const date = new Date(articleProp.published_date);
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
      {articleProp.title ? (
        <article className={style.articleCard}>
          <div className={style.articleInfo}>
            <p className={style.articleLabel}>
              {articleProp.section
                ? (() => {
                    switch (articleProp.section) {
                      case "us":
                        return "U.S.";
                      case "nyregion":
                        return "N.Y.";
                      case "realestate":
                        return "Real Estate";
                      default:
                        return articleProp.section;
                    }
                  })()
                : null}
            </p>
            <span className={style.articlePublishedDate}>{formatDate}</span>
          </div>
          <div className={style.mainContent}>
            <div className={style.articleText}>
              <a
                href={articleProp.url ? articleProp.url : null}
                target="_blank"
                rel="noopener noreferrer"
                className={style.articleLink}
              >
                <h1 className={style.articleTitle}>
                  {articleProp.title ? articleProp.title : null}
                </h1>
              </a>
              <span className={style.articleCreator}>
                {articleProp.byline ? articleProp.byline : null}
              </span>
              <p className={style.articleBody}>
                {articleProp.abstract ? articleProp.abstract : null}
              </p>
            </div>

            <div className={style.articleImg}>
              <img
                className={style.img}
                src={
                  articleProp.multimedia ? articleProp.multimedia[0].url : null
                }
              />
              <span className={style.copyright}>
                {articleProp.multimedia
                  ? articleProp.multimedia[0].copyright
                  : null}
              </span>
            </div>
          </div>
        </article>
      ) : null}
    </>
  );
}

Article.propTypes = {
  articleProp: PropTypes.object.isRequired,
};
