import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGet_Request } from "../Hooks/useGet_Reuqest";
import Moment from "react-moment";
import 'moment/locale/es';

import withoutPictures from "../assets/img/without_picture.png";

function Articles({home, searched}) {
  const [getArticles, setGetArticles] = useState([]);

  const { data: articles } = useGet_Request("articles");
  const {data: lastArticles} = useGet_Request("articles/:last");
  const {data: searchedArticle} = useGet_Request("search/"+searched);

  useEffect(() => {
      if(home){
        setGetArticles(lastArticles);
      } else if(searched && searched !== undefined && searched !== null){
        setGetArticles(searchedArticle);
      } 
      else {
          setGetArticles(articles);
      }
  }, [articles, home, lastArticles, searched, searchedArticle]);

//   console.log(getArticles);

  return (
    <>
      {
        getArticles !== undefined && 
        getArticles !== null && 
            getArticles.map( (article, index) => (
                <article 
                    key={index}
                    className="article-item" 
                    id="article-templete"
                >
                    <div className="article-img-wrap">
                        {
                            article.image != null ? (
                                <img src={article.image} alt={article.title} />
                            ) : (
                                <img src={withoutPictures} alt="programdor" />
                            )

                        }
                    </div>
                    <div className="article_content">
                        <h2> 
                            {article.title}
                        </h2>
                        <span className="article-date">
                            <Moment
                                locale="es"
                                fromNow
                            >
                                {article.date}
                            </Moment>
                        </span>
                        <Link to={"/blog/article/"+article._id} className="btn">
                            {" "}
                            Leer mas
                        </Link>
                    </div>
                </article>
            ))
      }
    </>
  );
}

export default Articles;
