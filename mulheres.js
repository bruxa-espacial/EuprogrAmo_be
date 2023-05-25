const express = require("express")  //iniciandoo express para dar propriedades de servidor para o projeto
const  { v4: uuidv4 } = require('uuid') //iniciando o uuid para gerar ids unicos para cada mulher

const router = express.Router() //configurando a primeira parte da rota

const app = express() //iniciando o app
// app recebe a chamada da função express

app.use(express.json()) //os dados que trafegarem pela requisição serão convertidos em json

const porta = 3333 //criando a porta

//criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },{
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },{
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

//GET
function mostraMulheres(request, response){
   response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher) //acrescenta a nova mulher na lista de mulheres
    response.json(mulheres) //retorna a lista de mulheres atualizada
}

//PATCH
function corrigeMulher(request, response){
    
    function encontraMulher(mulher){
        if (mulher.id === request.params.id){ //encontra a mulher pelo ID
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher) //.find serve para encontrar e retornar dados de num array

    // se os dados forem alterados, substitui os dados antigos pelos novos:
    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }
    if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }
    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres) //envio da respsta (retorna a lista de mulheres atualizada)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher){
        if (mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla) //filtra a lista de mulheres e retorna todas menos a que foi deletada

    response.json(mulheresQueFicam) //envio da resposta (retorna a lista de mulheres atualizada)
}

//ROTAS
app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota PATCH /mulheres/:id (id da mulher que será alterada)
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota DELETE /mulheres/:id (id da mulher que será deletada)

//PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta
//após ouvir a porta, chama a função mostraPorta