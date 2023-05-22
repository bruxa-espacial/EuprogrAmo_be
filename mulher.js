const express = require("express")
// require é uma função que importa o express

const router = express.Router()

const app = express()
// app recebe a chamada da função express

const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    })
}
//criando um objeto mulher com suas propriedades

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)
//após ouvir a porta, chama a função mostraPorta