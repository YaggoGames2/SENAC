//escopo global
 
function Tabuada(tabuadaUsuario) {
    //escopo específico
    let contador = 0, resultado, saidaTabuada;
 
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
    return saidaTabuada;
}
 
function TabuadaComLimite(tabuadaUsuario, limiteUsuario) {
    let contador = 0, resultado, saidaTabuada="";
 
 
    while (contador <= limiteUsuario) {
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`;
 
           
        }
        contador = contador + 1;
    }
    return saidaTabuada;
}
 
function main() {
    //Declarando Variaveis
    let tabuada; let limite;
 
    //Entrada de dados
    //Atribuindo valor a variavel (tabuada)
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
    limite = Number(prompt("Digite o limite da tabuada?"));
 
    // REPETIÇÃO COM WHILE
    //Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
    // console.log(Tabuada(tabuada));
    // alert(Tabuada(tabuada, limite));
    alert(TabuadaComLimite(tabuada, limite))
}
 
 
 
 
// pegar os dados
// faz tabuada
// exibe a saída  
 
 
main();
// functions
// com retorno
// sem retorno
// com parâmetros
// sem parâmetros
 
 
