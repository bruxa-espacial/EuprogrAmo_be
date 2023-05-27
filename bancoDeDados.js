const mongoose = require('mongoose')
require('dotenv').config()

// async faz com que o processo seja assincrono
async function conectaBancoDeDados(){
    try {
        console.log('Conexão com o banco de dados iniciou!')

        // await faz com que o processo espere a conexão com o banco de dados ser feita, atendando outras requisições enquanto isso
        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }
}

// deixando a função disponível para ser usada em outros arquivos
module.exports = conectaBancoDeDados