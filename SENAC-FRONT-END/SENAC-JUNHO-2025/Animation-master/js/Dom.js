document.getElementById('animacao2').addEventListener('click', animar);

function animar() {
    const elemento = document.getElementById('animacao2');
    elemento.classList.toggle('clicou');  /*toggle é um botão */
} 