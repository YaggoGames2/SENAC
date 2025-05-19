function CalcularMedia() {

const nomeAluno = document.getElementById("nomeAluno").value;
const nota1 = parseFloat(document.getElementById("nota1").value);
const nota2 = parseFloat(document.getElementById("nota2").value);
const nota3 = parseFloat(document.getElementById("nota3").value);
const nota4 = parseFloat(document.getElementById("nota4").value);

let media = (nota1+nota2+nota3+nota4)/4;

document.getElementById("MediaAluno").value = media.toFixed(2);

if (media>=7) {
    document.getElementById("situacaoAluno").value="aprovado";
}else if (media>=5) {
    document.getElementById("situacaoAluno").value="Em Recuperação";
} else {
    document.getElementById("situacaoAluno").value="reprovado";
}

}
