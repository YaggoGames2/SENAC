function calcular() {
    const valorAltura = document.querySelector("#alturaUsuario");
    const valorPeso = document.querySelector("#pesoUsuario");
    const Pesoresultado = document.querySelector(".form__resultado");
    const ImagemResultado = document.querySelector("#imagemResultado");
    const altura = parseFloat(valorAltura.value);
    const peso = parseFloat(valorPeso.value);
    const resultado = peso / (altura ** 2);
    let TipoDePeso = "";
    let Imagem = "";
 
    if (resultado < 16) {
 
        TipoDePeso = " Magreza Grau III"
        Imagem = "./img/bellsprout.gif"
        Pesoresultado.style.backgroundColor = "green";
        Pesoresultado.style.color = "yellow";
 
    } else if (resultado < 17) {
 
        TipoDePeso = " Magreza Grau II"
        Imagem = "./img/exeguttordealola.gif"
          Pesoresultado.style.backgroundColor = "beige";
        Pesoresultado.style.color = "green";
 
    } else if (resultado < 18.5) {
 
        TipoDePeso = " Magreza Grau I"
        Imagem = "./img/pheoromosa.gif"
        Pesoresultado.style.backgroundColor = "white";
        Pesoresultado.style.color = "blue";
 
    } else if (resultado < 25) {
 
        TipoDePeso = " Normal";
        Imagem = "./img/PausarGIFPikachuGIFsGetthebestgifonGIFER.gif"
        Pesoresultado.style.backgroundColor = "red";
        Pesoresultado.style.color = "yellow";
 
    } else if (resultado < 30) {
 
        TipoDePeso = " Pré obesidade";
        Imagem = "./img/pokemon-dragonite.gif"
        Pesoresultado.style.backgroundColor = "orange";
        Pesoresultado.style.color = "blue";
 
    } else if (resultado < 35) {
 
        TipoDePeso = " Obesidade moderada Grau I";
        Imagem = "./img/pokemon-snorlax.gif"
        Pesoresultado.style.backgroundColor = "blue";
        Pesoresultado.style.color = "white";
 
    } else if (resultado < 40) {
 
        TipoDePeso = " Obesidade severa Grau II";
        Imagem = "./img/slaking.gif";
        Pesoresultado.style.backgroundColor = "beige";
        Pesoresultado.style.color = "black";
 
    } else {
 
        TipoDePeso = " Obesidade muito severa Grau III";
        Imagem = "./img/PikachuGordao.gif";
        Pesoresultado.style.backgroundColor = "red";
        Pesoresultado.style.color = "pink";
    }
 
    Pesoresultado.innerHTML = resultado.toFixed(2) + TipoDePeso;
   ImagemResultado.src = Imagem;
}
 