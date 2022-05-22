import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useGet_Request } from "../Hooks/useGet_Reuqest";
import { requestDelete } from "../Helpers/RequestDelete";
import { sweetAlert } from "../Helpers/SweetAlert";
import Moment from "react-moment";
import "moment/locale/es";
import Sidebar from "./Sidebar";

import withoutPictures from "../assets/img/without_picture.png";


function Article() {
  const [getArticle, setGetArticle] = useState({});
  const [deleteArticle, setDeleteArticle] = useState(false);
  const { id: idArticle } = useParams();

  const { data } = useGet_Request("article/" + idArticle);
  const {confirmDialog} = sweetAlert();

  useEffect(() => {
    setGetArticle(data);
    // console.log(data);
  }, [data]);

  const handleClickUpdateArticle =()=>{
    
  }

  const handleClickDeleteArticle = () => {
    confirmDialog('¿Estas seguro?', '¿Deseas eliminar este artículo?', 'Eliminado', 'Artículo eliminado')
      .then((response)=>{
        if(response){
          requestDelete('article/'+idArticle)
            .then(response => {  
              setDeleteArticle(true);
                
            })
            .catch(err => {
              setDeleteArticle(false);
            });
        }
      })
      .catch(err => {
        setDeleteArticle(false);
      })
  }

  return (
    <>
      {
        deleteArticle &&
          <Navigate to='/blog' />
      }
      <div className="center main">
        <section className="content">
          {
            getArticle !== undefined && getArticle !== null && (
              <>
                <article className="article-item article_detail">
                  <div className="article-img-wrap">
                    {
                      getArticle.image != null ? (
                          <img src={getArticle.image} alt={getArticle.title} />
                        ) : (
                          <img src={withoutPictures} alt="programdor" />
                        )
                    }
                  </div>
                  <div className="article_content">
                    <h1 className="subheader"> {getArticle.title} </h1>
                    <span className="article-date">
                      <Moment locale="es" fromNow>
                        {getArticle.date}
                      </Moment>
                    </span>
                    <p>{getArticle.content}</p>
                  </div>

                  <div className="article-btns">
                    <Link to={'/blog/edit/' + idArticle } className="btn btn-update" onClick={handleClickUpdateArticle}>
                      Editar
                    </Link>
                    <input type="button" value="Eliminar" className="btn btn-delete" onClick={handleClickDeleteArticle} />
                  </div>

                </article>
              </>
            )
          }
        </section>
        <Sidebar 
                blog={false}
        />
      </div>
    </>
  );
}

export default Article;
