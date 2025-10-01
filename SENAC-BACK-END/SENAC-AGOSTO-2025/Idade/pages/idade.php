<?php

$nome = $_GET["nome"];
$nascimento = filter_input(INPUT_GET, "nascimento", FILTER_VALIDATE_INT);

$idade = 2025 - $nascimento;

$mensagemPrincipal = "<p> Seu nome é " . $nome . "</p>" .
                     " <p> Sua idade é: " . $idade . "</p>";

if ($idade >= 18) {
    $mensagem = "<p> Você é maior de idade! </p>";
} else {
    $mensagem = "<p> Você é menor de idade! </p>";
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Idade Maioridade </title>
</head>
<body>
    <h1> Maioridade </h1>
    <div class="resultado">
        <?php echo $mensagemPrincipal . "" . $mensagem?>
    </div>
</body>
</html>

