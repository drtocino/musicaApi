const mongoose = require('mongoose');
const cancionSchema = new mongoose.Schema({
    numero: { type: Number },
    nombre: { type: String},
    duracion: { type: String},
    archivo: { type: String},
    albumID: { type: Number}
})
const Cancion = mongoose.model('cancion', cancionSchema);
module.exports = Cancion;