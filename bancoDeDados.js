const mongoose = require('mongoose')

// async faz com que o processo seja assincrono
async function conectaBancoDeDados(){
    try {
        console.log('Conexão com o banco de dados iniciou!')

        // await faz com que o processo espere a conexão com o banco de dados ser feita, atendando outras requisições enquanto isso
        await mongoose.connect('mongodb+srv://jenmangelo:P6wxMqwbbUefb58p@clustermulheres.6g3otrv.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }
}

// deixando a função disponível para ser usada em outros arquivos
module.exports = conectaBancoDeDados