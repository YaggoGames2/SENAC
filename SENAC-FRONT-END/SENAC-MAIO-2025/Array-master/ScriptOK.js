
let Pokemons = new Array(6); // criando | declarando um array vazio

let PokemonsGeral = []; // criando | declarando um array vazio em posições fixas n posições

let mensagem;

// alert(Pokemons.length); //exibindo a quantidade de espaços do meu Array

//index é o contador
for (let index = 0; index < Pokemons.length; index++) {
    Pokemons[index] = prompt(`Digite o seu ${index + 1} pokémon!`); 
}

mensagem = "Seu time: \n"

for (let index = 0; index < Pokemons.length; index++) {
 mensagem = `${mensagem} ${Pokemons[index]} \n`;
}

alert(mensagem);

// alert(Pokemons); // exibindo todos oa dados do vetor
// console.log(Pokemons); // exibindo todos os dados do vetor

//exibindo os valores do vetor um a um
