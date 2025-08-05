let nomes = new Array(21);
let idades = new Array(21);
let cpfs = new Array(21);

nomes[0] = "Yaggo"
idades[0] = 17
cpfs[0] = "9498854059";

let cpf = new Array(21);

let mensagem
//Criando um objeto
const pessoa = { nome: "Yaggo", idade: 17, cpf: "3848382933" } //criado objeto pessoa
const pessoas = new Array(21); //criado array para guardar pessoas

const arrayPessoas = [
    {
        nome: "Juquinha",
        idade: 40,
        cpf: "77788899988"
    },
    {
        nome: "Mariazinha",
        idade: 28,
        cpf: "77788899900"
    }
]

for (let index = 0; index < arrayPessoas.length; index++) {
    mensagem=`${mensagem} nome: ${arrayPessoas[index].nome}, Cpf ${arrayPessoas[index].cpf} idade ${arrayPessoas[index].idade}`;
}
alert(mensagem)
   