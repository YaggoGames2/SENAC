function main() {
    let notabim1, notabim2, notabim3, notabim4, notabimsomada, mediafinal, notabimrecuperacao; //declarando variaveis em JS

    notabim1=0; //atribuindo variável em JS
    let numero = Number("2"); //declarando
    notabim1 = Number(prompt('Entre com o valor da primeira nota'));
    notabim2 = Number(prompt('Entre com o valor da segunda nota'));
    notabim3 = Number(prompt('Entre com o valor da terceira nota'));
    notabim4 = Number(prompt('Entre com o valor da quarta nota'));
    notabimsomada =(notabim1 + notabim2 + notabim3 + notabim4);
    mediafinal = notabimsomada / 4;
    alert("A media final é");
    alert(mediafinal);
 
    if (mediafinal >= 7) {
        alert("Aprovado");
       
    } else {
        if (mediafinal >= 5) {
            alert("O aluno está de recuperação");
            alert("Digite a nota da recuperação");
            notabimrecuperacao = Number(prompt('Enter a value for nota de recuperacao'));
            if (notabimrecuperacao >= 7) {
                alert("Aprovado");
            } else {
                alert("Reprovado");
            }
        } else {
            alert("Reprovado");
        }
    }
}
main()