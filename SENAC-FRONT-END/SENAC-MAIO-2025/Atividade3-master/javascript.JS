
let nome, salario, vendas;
let comissao;
let Pagamento;

nome = prompt("Digite o nome do vendendor");
salario = parseFloat(prompt("salário do vendedor:"));
vendas = parseFloat(prompt("Vendas realizadas"));

comissao = 0;

if (vendas > 3000) {
    comissao = vendas * 0.15;
} else if (vendas >= 1500 + vendas <= 2999.99) {
    comissao = vendas * 0.10;
} else {
    comissao = vendas * 0.05;
}
Pagamento = salario + comissao;

const resultado =`
 Vendedor: ${nome};
 Valor das vendas: R$ ${vendas.toFixed(2)};
 Valor da comissao: R$  ${comissao.toFixed(2)};
 Valor do salario: R$ ${ salario.toFixed(2)};
 Pagamento total: R$ ${ Pagamento.toFixed(2)}`;

alert(resultado);
console.log(resultado);


