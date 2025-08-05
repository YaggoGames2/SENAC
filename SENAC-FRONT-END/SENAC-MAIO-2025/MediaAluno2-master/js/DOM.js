// function CalcularMedia() {

//     const nomeAluno = document.getElementById("nomeAluno").value;
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     const nota2 = parseFloat(document.getElementById("nota2").value);
//     const nota3 = parseFloat(document.getElementById("nota3").value);
//     const nota4 = parseFloat(document.getElementById("nota4").value);

//     let media = (nota1+nota2+nota3+nota4)/4;

//     document.getElementById("MediaAluno").value = media.toFixed(2);

//     if (media>=7) {
//         document.getElementById("situacaoAluno").value="aprovado";
//     }else if (media>=5) {
//         document.getElementById("situacaoAluno").value="Em Recuperação";
//     } else {
//         document.getElementById("situacaoAluno").value="reprovado";
//     }

//     }

function ExecutarTestes() {
    // Pegar conteúdo de um elemento de formulário utilizando ID
    let conteudoInput = document.getElementById("nomeAluno").value;

    // Pegar o elemento de formulário utilizando ID
    let input = document.getElementById("nomeAluno");

    // Pegar conteúdo de um elemento  de formulário utilizando classe
    let nota4 = document.getElementsByClassName("form__textbox")[4].value;

    // Pegar conteúdo de um elemento de formulario usando tag - a nota2
    let nota2 = document.getElementsByTagName("input")[2].value;

    // Pegar conteúdo de um elemento tag - a tag p
    // let conteudoP = document.getElementsByTagName("P")[0].textContent;
    //ou
    let conteudoP = document.getElementsByTagName("P")[0].innerHTML;

    // mudar o valor de um elemento de formulário - nome - colocar Mariazinha
    document.getElementById("nomeAluno").value = "Mariazinha";

    //Mudar o valor de um elemento tag - a tag p - trocar para "Avaliação final do aluno"
    document.getElementsByTagName("P")[0].textContent = "Avaliação final do aluno";

    //Inserindo UMA <li>s em uma <ul> preexistente
    const ul = document.getElementById("lista");
    ul.innerHTML = "<li> Item </li>";

    //ou

    //Inserindo VÁRIA <li>s em uma <ul> preexistente
    // let ul2 = document.getElementsByTagName("ul")[0];
    // let li = document.createElement("li");
    // li.innerHTML = "TEXTO";
    // ul2.apprendChild(li);

    //Mudando a cor da letra do elemento p - utilizando a propriedade style
    document.getElementById("form").style.color = "white";
    //Mudar a cor da fundo do formulário - utilizando a propriedade style
    document.getElementById("form").style.backgroundColor = "red";
}
