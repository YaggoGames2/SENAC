document.getElementById('cepForm').addEventListener('submit', function (event) {
    // document.getElementById('cepForm'): procura no HTML um elemento com o ID cepForm (nosso formulário).
    // .addEventListener('submit', ...): diz ao navegador: “Quando o formulário for enviado, execute esta função”.
    // function(event): é a função que será executada quando o formulário for enviado. O event é um objeto que contém informações sobre o que aconteceu.

    event.preventDefault();  // Evita que a página recarregue
    // Isso impede que a página recarregue quando o formulário for enviado. Normalmente, o navegador recarrega a página, mas aqui queremos evitar isso para fazer tudo com JavaScript.


    const cep = document.getElementById('cep').value;// Pega o valor digitado no campo de texto com ID cep e guarda na variável cep.
    // const é uma forma de criar uma variável que não muda depois.

    if (!/^\d{8}$/.test(cep)) {

        alert(`Por favor,digite um CEP válido com 8 números.`);
        return;
    }
    // Verifica se o CEP tem exatamente 8 números.
    // /^\d{8}$/ é uma expressão regular (um tipo de verificação de texto).
    // Se o CEP for inválido, mostra um alerta e para a execução com return.

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        // fetch é uma função que faz uma requisição (pedido) para a internet.
        // Aqui, estamos pedindo os dados do CEP para o site do ViaCEP.
        // O ${cep} insere o valor digitado dentro do link.
        .then(response => response.json())
        // Quando a resposta da internet chegar, transformamos ela em formato JSON (um tipo de texto que o JavaScript entende como objeto).
        .then(data => {
            // Agora temos os dados do endereço dentro da variável data.

            if (data.erro) {
                resultado.innerHTML = "<p class='texto'>CEP não encontrado.</p>";
            } else {
                const enderecoCompleto = `<p class="texto"> <strong>Endereço completo:</strong><br>
            ${data.logradouro || '[Rua não disponível]'}<br>
            ${data.bairro || '[Bairro]'} - ${data.localidade || '[Cidade]'} / ${data.uf || '[UF]'}<br>
            <strong>CEP:</strong> ${cep} </p>`;
                resultado.innerHTML = enderecoCompleto;
            }
        })
        .catch(() => {
            resultado.innerHTML = "<p class='texto'>Erro ao buscar o CEP.</p>";
        });
});
