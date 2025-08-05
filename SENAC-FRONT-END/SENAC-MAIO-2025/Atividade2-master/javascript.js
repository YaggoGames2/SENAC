function main() {
    let numero1, numero2, resultado, saidacontagem = "";

    numero1 = Number(prompt("Digite o  primeiro número"));
    numero2 = Number(prompt("Digite o segundo número maior do que o primeiro"));

    resultado = numero1 + 1;

    while (resultado < numero2) {
        if (resultado % 2 == 0) {
            saidacontagem=saidacontagem+resultado+"- par\n" ;
        } else {
            saidacontagem=saidacontagem+resultado+"- ímpar\n";
        }
        resultado = resultado + 1;
    }
    console.log(saidacontagem);
    alert(saidacontagem);
}

main()
