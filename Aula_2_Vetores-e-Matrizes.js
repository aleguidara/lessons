// JavaScript Document
console.log ("***Aula 2***")


//Vetores - coleção de variaveis, tambem chamado de Arrays
console.log ("***Vetores - Arrays***")
//let variavel = ["0","1","2", ....]
let nomes = ["Ale Guidara", "Lilian Haddad", "Arthur Haddad", "Luna Lunatica"]

console.log (nomes [0])
console.log (nomes [1])
console.log (nomes [2])
console.log (nomes [3])
//exemplos de funções
nomes.pop() //remove o ultimo
console.log (nomes)
nomes.shift() //remove o primeiro
console.log (nomes)

//Matrizes - coleção de Arrays
console.log ("***Matrizes***")

let family = [
  ["Ale Guidara", "M", "47", "pai"],
  ["Lilian Haddad", "F", "45", "mae"],
  ["Arthur Haddad", "M", "13", "filho"],
  ["Luna", "F", "3", "cã"]
]

console.log ("Nessa família o nome do " + family[0][3] 
+ " é " + family[0][0] 
+ ", ele tem " + family [0][2] 
+ " e obviamente é do sexo " + family[0][1] 
+ ".")

