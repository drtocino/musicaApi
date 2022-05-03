const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
// var bodyParser = require('body-parser');

const Usuario = require("./database/models/usuario");

const Album = require("./database/models/album");

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

//const album = new Album({ titulo: 'Primavera',descripcion:"Musica Romatica",anio: "2015",imagen: "asdf.png",artistaID: "1"});
//album.save();


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
app.post('/postArtistas', (req, res) => {
    //console.log(req.body)
    const artist = new Artista(req.body);
    artist.save().then((result) =>{
        res.send(result);
    }).catch((error) => {
        console.log(error);
    })
})

app.put('/putArtista/:nombre', (req, res) => {
    console.log(req.params)
    const nombre = req.body.nombre
    const param = req.params.nombre
    Artista.updateOne({nombre: param},
        {nombre: nombre},(err,docs) => {
            console.log("Actualizado")
        }
    ).then((response) => {
        res.send(response);
    }).catch((error)=> {
        console.log(error)
    })
    res.send("asd")

    /*artist.save().then((result) =>{
        res.send(result);
    }).catch((error) => {
        console.log(error);
    })*/
})

app.delete('/deleteArtista/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Artista.findByIdAndDelete(id,(err,docs) => {

        console.log(err);
        console.log(docs);
        err ? res.send("Error") : res.send("Exito");
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log(error);
    })
    //res.send("asd")
})

app.get('/getAlbum',(req, res) => {
    Album.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

app.post('/postAlbum',(req, res)=>{
    const album = new Album(req.body)
    album.save()
    .then((list) => {res.send(list); console.log(list)})
    .catch( (error) => {console.log(error)});
})

app.put('/putAlbum/:nombre', (req, res) => {
    console.log(req.params);
    Album.findOneAndUpdate(req.params,req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch( (error) => {console.log(error)});
})



app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});