// JavaScript Document
console.log ("***Aula 1***")

//saida
console.log("digite o nome do seu jogador")

// declarar variavel:
let nickname = "AleGuidara"

// declarar uma constante:
// const notificacao = "Sala"
let notificacao = "Sala "
// o comando let permite alterar a constante posteriormente

//concatenando msg fixa com variaveis ou constantes
console.log("Bem vindo " + nickname)

console.log(nickname + " entrou na sala")

console.log(notificacao + "entrou novo membro")

notificacao  = "Sala1 diz: "

console.log(notificacao + "você foi redirecionado")

//Tipos de variaveis - ex:Pokemon
//string - armazena texto
//number - armazena numeros
//boolean - armazena valores logicos, sim ou nao (true or false)

//nome
let nomePokemon
//nivel
let nivelPokemon
//pontos
let pontosVidaPokemon
//sexo
let sexoPokemon
//ativo ou nao
let selecionavel

nomePokemon = "pikachu"
nivelPokemon = 20
pontosVidaPokemon = 45
sexoPokemon = "M"
selecionavel = true

//exercicio
// nome, idade, telefone, cpf, endereço, cadastrado
//string - armazena texto
//number - armazena numeros
//boolean - armazena valores logicos, sim ou nao (true or false)

let nome = "Ale Guidara"
let idade = 47
let telefone = "+55 11 9 9975 8023"
let cpf = "213.797.818-09"
let endereco = "Rua Ouvidor Peleja, 280 cep 04128-000"
let cadastrado = true

console.log ("***Exercício Cadastro***")
console.log ("nome: " + nome)
console.log ("idade: " + idade)
console.log ("telefone: " + telefone)
console.log ("cpf: " + cpf)
console.log ("enderço: " + endereco)
console.log ("possui cadastro: " + cadastrado)
