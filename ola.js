const express = require("express")
// require é uma função que importa o express

const router = express.Router()
// esta etapa faz parte da configuração da rota

const app = express()
// app recebe a chamada da função express

const porta = 3333

function mostraOla(request, response){
    response.send("Olá, mundo!")
}
// "request" e "response" são os parâmetros para definir requisição e resposta 

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/ola", mostraOla))
// agora estamos dizendo para o aplicativo responder o verbo GET na rota /ola e chamar a função mostraOla

app.listen(porta, mostraPorta)
// após ouvir a porta, chama a função mostraPorta