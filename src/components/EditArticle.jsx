import {useState, useEffect} from 'react'
import {Navigate, useParams} from 'react-router-dom';
import {sweetAlert} from '../Helpers/SweetAlert.js';
import Sidebar from './Sidebar';
import { useGet_Request } from '../Hooks/useGet_Reuqest.js';
import {requestPut} from '../Helpers/RequestPut';

function EditArticle() {

    const [dataFormCreateArticle, setDataFormCreateArticle] = useState({});
    const [imageFile, setImageFile] = useState({});
    const [successCreateArticle, setSuccessCreateArticle] = useState('')

    const {id: idArticle} = useParams();
    const {data: getArticle} = useGet_Request('article/'+idArticle);
    
    const {successAlert} = sweetAlert();

    useEffect(() => {
        // console.log(getArticle)
        setDataFormCreateArticle(getArticle);
    }, [getArticle]);

    const submitCreateArticle = (e) => {
        e.preventDefault();
        // console.log(dataFormCreateArticle)
        // console.log(imageFile)
        requestPut('article/'+idArticle, dataFormCreateArticle,imageFile)
            .then (response=>{
                successAlert('Actualizado!', 'Buen trabajo, has actualizado el artículo!.');

                setSuccessCreateArticle(response)
            })
            .catch(err=> {

            })
        
    }

    const onChangeDataCreateArticle = ({target}) => {
        const {name, value} = target;

        setDataFormCreateArticle( dt => {
            return { 
                ...dt,
                [name]: value
            }
        } );
    }

    const onChangeFile = (e) => {
        console.log(e)
        setImageFile(e.target.files[0])
    }
 
    
    return (
        <>
            {
                successCreateArticle === "succes" && 
                    <Navigate to={'/blog'} />
            }
            <div className="center main">
                <section className="content">
                    <h1 className="subheader"> Editar Articulo </h1>
                    <form className="mid-form" onSubmit={submitCreateArticle} >
                        <div className="form-group">
                            <label htmlFor="title">Titulo:</label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title"
                                defaultValue={dataFormCreateArticle?.title}
                                placeholder="Ej: Lenguajes TOP" 
                                onChange={onChangeDataCreateArticle}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido:</label>
                            <textarea 
                                name="content" 
                                id="content" 
                                defaultValue={dataFormCreateArticle?.content}
                                placeholder="Ej: Lenguajes TOP" 
                                className="" 
                                onChange={onChangeDataCreateArticle} 
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen:</label>
                            <input 
                                type="file" 
                                name="file0" 
                                id="file0" 
                                placeholder="Ej: Lenguajes TOP" 
                                className="" 
                                onChange={onChangeFile} 
                            />
                        </div>
                        <input 
                            type="submit" 
                            name="submit" 
                            value="Guardar" 
                            className="btn btn-success" 
                            onChange={submitCreateArticle} 
                        />
                    </form>
                </section>
                <Sidebar />
            </div>
        </>
    )
}

export default EditArticle
