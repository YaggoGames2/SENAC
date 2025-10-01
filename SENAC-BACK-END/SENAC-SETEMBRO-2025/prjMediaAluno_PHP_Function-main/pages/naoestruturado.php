<?php
function darBoasVindas()
{
    $hora = time();
    echo "Hello World Function, {$hora}";
}
 
function calcularMedia($arrayNotas)
{
    $resultado = array_sum($arrayNotas) / count($arrayNotas);
    return $resultado;
}
 
// O que estiver dentro do parenteses é o parametro
function verificarAprovacao($umaMedia){
    return $umaMedia >= 7 ? true : false;
    // if ($umaMedia>=7) {
    //     return true;
    // } else {
    //     return false;
    // }    
}
 
$nome = trim($_GET['nome']);
$notas = $_GET['notas'];
 
echo "Feito com valores de entrada";
$media = calcularMedia($notas);
$resultado = verificarAprovacao($media);
var_dump($media);
var_dump($resultado);
 
echo "Feito com valores fixos";
$media = calcularMedia([10,10,10,10,10,10,10]);
$resultado = verificarAprovacao(7);
var_dump($media);
var_dump($resultado);
 
// $mensagemBoasVindas = "Olá, {$nome}! Sua média é: {$media}";
// if ($media >= 7) {
//     $mensagemResultado = "Parabéns, você foi aprovado!";
// } else {
//     $mensagemResultado =  "Infelizmente, você foi reprovado.";
// }
 
// $mensagemResultado = $media>=7 ? "Parabéns, você foi aprovado!" :
// "Infelizmente, você foi reprovado.";
?>
 
<!DOCTYPE html>
<html lang="pt-BR">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance do Aluno</title>
    <link rel="stylesheet" href="./../css/style.css">
</head>
 
<body>
    <main class="container">
        <h1>Performance do Aluno</h1>
        <p><?= $mensagemBoasVindas ?></p>
        <p id="<?= $media >= 7 ? "aprovado" : "reprovado"; ?>"><?= $mensagemResultado ?></p>
    </main>
</body>
 
</html>
 