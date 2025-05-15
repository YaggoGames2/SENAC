//escopo global
 
function Tabuada(tabuadaUsuario){
    //escopo específico
    let contador, resultado, saidaTabuada;
 
    while (contador <= 10) {    
        //Atribuindo valor a variavel resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
        }
        contador = contador + 1; //contador++;        
    }    
    return tabuadaUsuario;
}
 
 
function main() {
    //Declarando Variaveis
    let tabuada;
 
    //Entrada de dados
    //Atribuindo valor a variavel (tabuada)
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
     
    // REPETIÇÃO COM WHILE
    //Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
    console.log(Tabuada(tabuada));
    alert(Tabuada(tabuada));    
}
 
// pegar os dados
// faz tabuada
// exibe a saída  
 
 
main();
 