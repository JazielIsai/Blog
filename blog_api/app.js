'use strict'

//Cargar modulos de node para crear el servirvidor
var express = require("express");
var bodyParser = require('body-parser');

//ejectutar el express (http)
var app = express();

//Cargar ficheros rutas
var articleRoutes = require('./routes/article');

//Middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prejifo a rutas / Cargar rutas
app.use('/api', articleRoutes);

//Ruta o método de prueba para el API REST
/*app.post('/datos-curso', (req,res)=> {
    console.log("Hola mundo");

    var hola = req.body.hola;
    
    return res.status(200).send({
        curso: "Master en framework js",
        autor: "Jaziel Isaí",
        url: "Jaziel Isai",
        hola
    });
 })*/


//exportar modulos (fichero actual)
module.exports = app;