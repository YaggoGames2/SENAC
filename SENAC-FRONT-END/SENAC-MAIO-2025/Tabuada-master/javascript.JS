//escopo global

function Tabuada(tabuadaUsuario) {
    //escopo específico
    let contador, resultado, saidaTabuada;

    while (contador <= 10) {
        // Atribuindo valor a variavel resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            // saidatabuada = saidatabuada +"\n" + tabuada +"X"+ contador +"="+ resultado;

            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //teplate String
        }
        contador = contador + 1; //contador++;
    }
    return saidaTabuada;
}

function main() {
    //declarando as variáveis//
    let tabuada;
 
    //Atribuindo valor a variável (contador)
    contador = 0;

    //Entrada de dados
    //Atribuindo valor a variável (tabuada)
    Tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));

   console.log(Tabuada(tabuada))
    alert( Tabuada(tabuada));

}

main();
