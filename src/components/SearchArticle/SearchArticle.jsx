import style from "./SearchArticle.module.scss";
import PropTypes from "prop-types";

export default function SearchArticle({ articleProp }) {
  const date = new Date(articleProp.pub_date);
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
      {articleProp.headline ? (
        <div className={style.articleCard}>
          <div className={style.articleInfo}>
            <p className={style.articleLabel}>
              {articleProp.section_name
                ? (() => {
                    switch (articleProp.section_name) {
                      case "us":
                        return "U.S.";
                      case "nyregion":
                        return "N.Y.";
                      case "realestate":
                        return "Real Estate";
                      default:
                        return articleProp.section_name;
                    }
                  })()
                : null}
            </p>
            <span className={style.articlePublishedDate}>{formatDate}</span>
          </div>
          <a
            href={articleProp.web_url ? articleProp.web_url : null}
            target="_blank"
            rel="noopener noreferrer"
            className={style.articleLink}
          >
            <h1 className={style.articleTitle}>
              {articleProp.headline ? articleProp.headline.main : null}
            </h1>
          </a>
          <span className={style.articleCreator}>
            {articleProp.byLine ? articleProp.byLine : null}
          </span>
          <p className={style.articleBody}>
            {articleProp.abstract ? articleProp.abstract : null}
          </p>
        </div>
      ) : null}
    </>
  );
}

SearchArticle.propTypes = {
  articleProp: PropTypes.object.isRequired,
};
