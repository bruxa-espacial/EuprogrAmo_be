const mongoose = require('mongoose')

// "new mongoose.Schema" define o modelo de um objeto que será salvo no banco de dados
const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
            type: String,
            required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)
// o mongo acrscenta um "s" no final do nome de toda coleção