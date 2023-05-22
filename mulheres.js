const express = require("express")
// require é uma função que importa o express

const router = express.Router()

const app = express()
// app recebe a chamada da função express

const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },{
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

function mostraMulheres(request, response){
   response.json(mulheres)
}
//criando um objeto mulher com suas propriedades

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))

app.listen(porta, mostraPorta)
//após ouvir a porta, chama a função mostraPorta