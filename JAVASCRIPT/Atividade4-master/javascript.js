
    let numero1 = parseInt(prompt("Digite o primeiro número"));
    let numero2 = parseInt(prompt("Digite o segundo número"));

    // Validando entrada de dados
    if (numero1 === numero2) {
        alert("Impossível incrementar ou decrementar");
    } else if (numero1 < numero2) {
        // Ordem crescente (excluindo os extremos)
        for (let contador = numero1; contador <= numero2; contador++) {
            if (contador === numero1) {
                console.log("Início: " + contador);
            } else if (contador === numero2) {
                console.log("Fim: " + contador);
            } else {
                console.log(contador);
            }
        }
    } else {
        // Ordem decrescente (excluindo os extremos)
        for (let contador = numero1; contador >= numero2; contador--) {
            if (contador === primeiroNumero) {
                console.log("Início: " + contador);
            } else if (contador === numero2) {
                console.log("Fim: " + contador);
            } else {
                console.log(contador);
            }
        }
    }
