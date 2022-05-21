'use strict'  //Libreria para buenas practicas en js

var mongoose = require("mongoose");
var app = require('./app');
var port = 3900;

let url = 'mongodb://localhost:27017/inventario_db';

//mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then( () => { 
        console.log("La cnx a la BD ha sido exitosa");

        //Crear servidor
        app.listen(port, ()=>{
            console.log('servidor corriendo en HTTP ' + port);
        });
    } )

