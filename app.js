const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
// var bodyParser = require('body-parser');

const Usuario = require("./database/models/usuario");
const Album = require("./database/models/album");

// configuracion cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
// creacion de un usuario modo test
// const user = new Usuario({ nombre: 'test1',correo:"example@mail.com",contrasena: "1252340",rol: "admin",imagen: "asdf.png"});
// user.save();
// rutas

    const album = new Album({ titulo: 'Primavera',descripcion:"Musica Romatica",anio: "2015",imagen: "asdf.png",artistaID: "1"});
    album.save();
    
app.get('/getUsuarios', (req, res) => {
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

app.get('/getAlbum',(req, res) => {
    Album.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});