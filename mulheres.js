const express = require("express")  //iniciandoo express para dar propriedades de servidor para o projeto
const router = express.Router() //configurando a primeira parte da rota
const conectaBancoDeDados = require('./bancoDeDados') //importando o banco de dados
const Mulher = require('./mulherModel') //importando o modelo de mulher

conectaBancoDeDados() //chamando a função que conecta o banco de dados

const app = express() //iniciando o app
// app recebe a chamada da função express

app.use(express.json()) //os dados que trafegarem pela requisição serão convertidos em json

const porta = 3333 //criando a porta

//GET
async function mostraMulheres(request, response){
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find() //esperando a conexão acontecer e, quando conseguir, busca todas as mulheres no banco de dados
        //find() guarda o resultado na constante e envia esse objto na resposta da requisição
        response.json(mulheresVindasDoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        citacao: request.body.citacao,
        minibio: request.body.minibio
    })

    try {
        const mulherCriada = await novaMulher.save() //espera a conexão acontecer e, quando conseguir, salva a nova mulher no banco de dados
        response.status(201).json(mulherCriada) //envio da resposta (retorna a nova mulher criada)
    } catch (erro) {
        console.log(erro)
    }

}

//PATCH
async function corrigeMulher(request, response){

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id) //espera a conexão acontecer e, quando conseguir, busca a mulher no banco de dados pelo ID

        // se os dados forem alterados, substitui os dados antigos pelos novos:
        if (request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
        if (request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }
        if (request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save() //espera a conexão acontecer e, quando conseguir, salva a mulher atualizada no banco de dados

        response.json() //envio da respsta (retorna a lista de mulheres atualizada)

    } catch (erro) {
        console.log(erro)
    }

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