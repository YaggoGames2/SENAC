// function NumerosNegativos() {
//     const numeros = [
//         num = Number(prompt(`Digite um numero:`)),
//         num = Number(prompt(`Digite um numero:`)),
//         num = Number(prompt(`Digite um numero:`)),
//         num = Number(prompt(`Digite um numero:`)),
//         num = Number(prompt(`Digite um numero:`)),
//         num = Number(prompt(`Digite um numero:`))
//     ];

//     const NumerosNegativos = [];

//     for (let i = 0; i < NumerosNegativos.length; i++) {
//         if (numeros[i] < 0) NumerosNegativos.filter(num)
//     }
//  if (NumerosNegativos.length > 0) {
//     alert("Números negativos:" + NumerosNegativos.join(","));
//  } else {
//     alert("n tem numero")
//  }


// }

function NumerosNegativos() {
    // Solicita ao usuário que insira seis números
    const numeros = [
        Number(prompt("Digite um número:")),
        Number(prompt("Digite um número:")),
        Number(prompt("Digite um número:")),
        Number(prompt("Digite um número:")),
        Number(prompt("Digite um número:")),
        Number(prompt("Digite um número:"))
    ];

    // Filtra os números negativos
    const negativos = numeros.filter(num => num < 0);

    // Exibe os números negativos encontrados
    if (negativos.length > 0) {
        alert("Números negativos: " + negativos.join(", "));
    } else {
        alert("Não há números negativos.");
    }
}