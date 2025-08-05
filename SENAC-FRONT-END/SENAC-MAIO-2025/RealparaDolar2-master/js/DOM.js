function Converter() {
    const valorConverter = document.getElementById("bloco_one");
    // const valorConverter = document.querySelector("#bloco_one");
    const opcaoMoeda = document.getElementById("form__money-option");
    const resultado = document.querySelector("#form__resultado");

    // const cotacaoEuro = 6.31;
    // const cotacaoDolar = 5.61;

    let cotacao;
    let simbolo;

    if (opcaoMoeda.value == "" || valorConverter.value == "") {
        alert("Escolha a moeda ou digite um valor válido!!!");
    } else {
        if (opcaoMoeda.value == "dolar") {
            cotacao = 5.61;
            simbolo = "U$";
        } else {
            cotacao = 6.31;
            simbolo = "€";
        }

        resultado.style.padding = "20px";
        resultado.style.color = "green";
        resultado.style.borderColor = "black";
        resultado.style.borderWidth = "1px";
        resultado.style.borderStyle = "solod";
        resultado.style.fontWeight = "bold";

        resultado.innerHTML =  (valorConverter.value / cotacao).toFixed(2) + simbolo;
    }
}