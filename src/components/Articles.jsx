import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGet_Request } from "../Hooks/useGet_Reuqest";

function Articles({ articles }) {
  const [getArticle, setGetArticle] = useState(null);

  const { data } = useGet_Request("articles");

  useEffect(() => {
    setGetArticle(data);
    console.log(data);
  }, [data]);

  return (
    <>
      {
          getArticle !== undefined && getArticle !== null && (
            <article className="article-item" id="article-templete">
                <div className="article-img-wrap">
                    <img src={getArticle?.image} alt="programdor" />
                 </div>
                 <div className="article_content">
                    <h2> {getArticle?.title}</h2>
                    <span className="article-date">
                        {getArticle?.data}
                    </span>
                    <NavLink to="/blog" className="btn">
                        {" "}
                        Leer mas
                    </NavLink>
                </div>
            </article>
          )
      }
    </>
  );
}

export default Articles;
