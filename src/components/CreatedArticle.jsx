import {useState} from 'react'
import {Navigate} from 'react-router-dom';
import Sidebar from './Sidebar';
import {requestPost} from '../Helpers/RequestPost';

function CreatedArticle() {

    const [dataFormCreateArticle, setDataFormCreateArticle] = useState({});
    const [imageFile, setImageFile] = useState({});
    const [successCreateArticle, setSuccessCreateArticle] = useState('')

    const submitCreateArticle = (e) => {
        e.preventDefault();
        // console.log(dataFormCreateArticle)
        // console.log(imageFile)
        requestPost('save', dataFormCreateArticle,imageFile)
            .then (response=>{
                setSuccessCreateArticle(response)
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
                    <h1 className="subheader"> Crear Articulo </h1>
                    <form className="mid-form" onSubmit={submitCreateArticle} >
                        <div className="form-group">
                            <label htmlFor="title">Titulo:</label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Ej: Lenguajes TOP" 
                                onChange={onChangeDataCreateArticle}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido:</label>
                            <textarea 
                                name="content" 
                                id="content" 
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

export default CreatedArticle
