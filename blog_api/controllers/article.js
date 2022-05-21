'use strict'

var validator = require('validator');
var fs = require("fs");
var path = require("path");
var Article = require('../models/article');
const { exists } = require('../models/article');
//const { param } = require('../routes/article');

var controller = {

    datosCurso: (req, res) => {

        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'master en frameworks js',
            autor: 'Jaziel Isaí',
            url: 'jazielisai',
            hola
        });
    },

    test: (req, res) =>{
        return res.status(200).send({
            messenge: 'Soy la accion test de mi controlador de articulo'
        });
    },

    //Guardando un articulo
    save: (req, res) =>{

        //Recoger los parametos por post
        var params = req.body;
        
        //validar datos con la libreria validator
        try{
                                         //isEmpty(str [, options])	check if the string has a length of zero.
            var validateTitle = !validator.isEmpty(params.title); //En la variable guardará un true cuando no este vacio params title
            var validateContent = !validator.isEmpty(params.content); //Guardará un true en la variable cuando no este vacio el params content
        }catch{
            return res.status(200).send({
                status: 'error',
                messenge: 'Faltan datos por enviar'
            });
        }

        if(validateTitle && validateContent){

            //Crear el objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar valores
            article.save((err, articleStored) =>{

                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        messenge: 'El articulo no se ha guardado'
                    });
                }
                
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'succes',
                    article: articleStored
                });

            });


        }else{
            return res.status(200).send({
                status: 'error',
                messenge: 'Los datos no son validos!!'
            });
        }
    },

    //Obtener todos o un limite de articulos
    getArticles: (req, res) =>{
        
        var query = Article.find({});
        
        var last = req.params.last;

        if(last || last != undefined){
            query.limit(5);
        }

        //Necesitamos un find() para sacar los datos de la BD
        query.sort('-_id').exec((err, articles)=>{
            
            if(err){
                return res.status(200).send({
                    status: 'error',
                    messenge: 'Error al deovolver los datos del articulo'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    messenge: 'No hay articulos exisitentes en este momento'
                })
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });


    },

    //Obtener un solo articulo por id
    getArticle: (req, res) => {

        //Recoger el id de la URL
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId === null){
            return res.status(404).send({
                status: 'error',
                messenge: 'No existe el articulo selecionado'
            });
        }

        // Buscar el articulo
        Article.findById(articleId, (err, article) => {

            if(err || !article){
                return res.status(404).send({
                    status: 'Error',
                    messenge: 'No existe el articulo!!!'
                });
            }

            // Devolverlo en JSON
        
            return res.status(200).send({
                status: 'success',
                article
            });
        });


    },

    //Actualizar un articulo
    update: (req, res) => {
        //regoger el ID del articulo por la URL
        var articleId = req.params.id;

        //Recoger los datos que llenan por put
        var params = req.body;

        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(500).send({
                status: 'Error',
                messenge: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            //Find and update
            Article.findOneAndUpdate({ _id: articleId }, params, {new: true}, (err, articleUpdate) => {
                if(err){
                    return res.status(500).send({
                        status: 'err',
                        messenge: 'error al actualizar'
                    });
                }

                if(!articleUpdate){
                    return res.status(404).send({
                        status: 'error',
                        messenge: 'No existe el articulo!!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdate
                });

            });
        }else{
            //Devolver una respuesta
            return res.status(500).send({
                status: 'error',
                messenge: 'validación incorrecta'
            });
        }


    },

    delete: (req, res) =>{
        //recoger el id de la url
        var articleId = req.params.id;


        //Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemove) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    messenge: 'Error al borrar'
                });
            }

            if(!articleRemove){
                return res.status(404).send({
                    status: 'error',
                    messenge: 'No se pudo borrar el articulo seleccionado'
                });
            }

            return res.status(200).send({
                status: 'Success',
                article: articleRemove
            });

        });
    },

    upload: (req, res) =>{

        //configurar el modulo connect multiparty router/article.js  (hechp)

        //Recoger el fichero de la petición que enviamos nosotros
        var fileName = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                messenge: fileName
            });
        }

        //Conseguir el nombre y la extención del archivo

        var fildePath = req.files.file0.path;
        var file_split = fildePath.split('\\');

        // * * * ADVERTENCIA * * * EN LINUX O MAC
        //para poder separar el path es con / es decir: 
        //         var file_split = fildePath.split('/');

        //Nombre del archivo
        var fileName = file_split[2];
        
        //Extención del fichero o archivo
        var extension_split = fileName.split('\.');
        var file_ext = extension_split[1];


        //Comprobar la extención, solo imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif' && file_ext != 'svg'){
            //borrar el archivo subido
            fs.unlink(fildePath, (err) =>{
                return res.status(404).send({
                    status: 'error',
                    messenge: ' La extención de la img no es valida'
                });
            });
        }else{
            //si todo es valido, sacando la id de la URL
            var articleId = req.params.id;
            //buscar el articulo, asiganarle el nombre de la img y actualizarlo
            Article.findOneAndUpdate({_id: articleId}, {image: fileName}, {new: true}, (err, articleUpdate) =>{

                if(err || !articleUpdate){
                    return res.status(404).send({
                        status: 'error',
                        messenge: 'Error al guardar img del articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdate
                });
            });
            
        }
    }, //end upload file

    getImage: (req, res) => {
        var file = req.params.image;

        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    messenge: 'La img no existe'
                });
            }
        })

    }, //end get image

    search: (req, res) => {
        //Sacar el string o buscar
         var searchString = req.params.search;

        //Find or 
        Article.find({ "$or":[
            {title: {"$regex": searchString, "$options": "i"}},
            {content: {"$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    messenge: 'Error en la petición'
                });
            }

            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    messenge: 'No hay articulos que coincidan con tu busqueda'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });

    }

}; //end controller

//Exportar modulo fichero actual
module. exports = controller;