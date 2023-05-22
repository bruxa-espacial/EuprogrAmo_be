const express = require("express")
// require é uma função que importa o express

const router = express.Router()

const app = express()
// app recebe a chamada da função express

const porta = 3333

function mostraHora(request, response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}
//criando um objeto mulher com suas propriedades

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)
//após ouvir a porta, chama a função mostraPorta