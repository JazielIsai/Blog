import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useGet_Request} from '../Hooks/useGet_Reuqest';

function Article({img, title}) {

  const [getArticle, setGetArticle] = useState(null);
  
  const { data } = useGet_Request('articles');

  useEffect(() => {
    setGetArticle(data);
    console.log(data)
  },[data])

  return (
    <article className="article-item" id="article-templete">
      <div className="article-img-wrap">
        <img src={img} alt="programdor" />
      </div>
      <div className="article_content">
        <h2> {title}</h2>
        <span className="article-date">Hace 5 minutos</span>
        <NavLink to="/blog" className="btn">
          {" "}
          Leer mas
        </NavLink>
      </div>
      
    </article>
  );
}

export default Article;
