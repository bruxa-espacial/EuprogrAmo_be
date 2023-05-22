const express = require("express")
// require é uma função que importa o express

const app = express()
// app recebe a chamada da função express

const porta = 3333

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)
//após ouvir a porta, chama a função mostraPorta