
let Poke1, Poke2, Poke3, Poke4, Poke5, Poke6; // declarando 6 variáveis vazias
let Pokemons = []; // criando | declarando um array vazio

Pokemons[0] = prompt("Digite o seu primeiro pokémon!"); //lendo o vetor na posição 0 que é a primeira
Pokemons[1] = prompt("Digite o seu segundo pokémon!");
Pokemons[2] = prompt("Digite o seu terceiro pokémon!");
Pokemons[3] = prompt("Digite o seu quarto pokémon");
Pokemons[4] = prompt("Digite o seu quinto pokémon!");
Pokemons[5] = prompt("Digite o seu sexto pokémon!");

// alert(Pokemons); // exibindo todos oa dados do vetor
// console.log(Pokemons); // exibindo todos os dados do vetor

//exibindo os valores do vetor um a um
alert(`Seu time: 
    ${Pokemons[0]} 
    ${Pokemons[1]} 
    ${Pokemons[2]} 
    ${Pokemons[3]} 
    ${Pokemons[4]} 
    ${Pokemons[5]}`);