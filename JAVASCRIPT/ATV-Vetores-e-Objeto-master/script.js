const alunos = new Array(3);
 
for (let i = 0; i < alunos.length; i++) {
    const aluno = {
        nome: "",
        notabim: 0,
        notabim2: 0,
        notabim3: 0,
        notabim4: 0,
        mediafinal: 0,
        mensagem: ""
    };
 
    aluno.nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
    aluno.notabim = parseFloat(prompt("Nota do 1º bimestre:"));
    aluno.notabim2 = parseFloat(prompt("Nota do 2º bimestre:"));
    aluno.notabim3 = parseFloat(prompt("Nota do 3º bimestre:"));
    aluno.notabim4 = parseFloat(prompt("Nota do 4º bimestre:"));
 
    aluno.mediafinal = (aluno.notabim + aluno.notabim2 + aluno.notabim3 + aluno.notabim4) / 4;
 
    if (aluno.mediafinal >= 7) {
        aluno.mensagem = "Aprovado";
    } else if (aluno.mediafinal >= 5) {
        aluno.mensagem = "Recuperação";
    } else {
        aluno.mensagem = "Reprovado";
    }
 
    alunos[i] = aluno;
}
 
for (let i = 0; i < alunos.length; i++) {
    console.log(
        alunos[i].nome+" "+alunos[i].mediafinal
    );
}
 