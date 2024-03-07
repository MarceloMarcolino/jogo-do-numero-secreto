function exibirOla() {
    console.log('Olá, mundo!');
}
exibirOla();

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirOlaNome('Marcelo');

function calcularDobro(numero) {
    return numero * 2;
}
let resultaDobro = calcularDobro(5);
console.log(resultaDobro);

function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let media = calcularMedia(15, 9, 10);
console.log(media);

function encontrarMaior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
let maiorNumero = encontrarMaior(4, 7);
console.log(maiorNumero);

function quadrado(numero){
    return numero * numero;
}
let resultado = quadrado(8);
console.log(resultado);