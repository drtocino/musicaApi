const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
// var bodyParser = require('body-parser');
const Usuario = require("./database/models/usuario");
const Artista = require("./database/models/artista");
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
// const artist = new Artista({ nombre: 'test2',descripcion:"...",imagen: "asds.png"});
// artist.save();
// rutas
app.get('/getUsuarios', (req, res) => {
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})
app.get('/getArtistas', (req, res) => {
    Artista.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});