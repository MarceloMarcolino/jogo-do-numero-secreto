function calcularIMC(alturaMetros, peso) {
    let imc = peso / (alturaMetros * alturaMetros);
    return imc;
}
let exemploIMC = calcularIMC(1.67,83);
console.log(`Seu IMC é de ${exemploIMC}`);

function calcularFatorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}
//Exemplo de uso
let exemploFatorial = 5;
let resultado = calcularFatorial(exemploFatorial);
console.log(`O fatorial de ${exemploFatorial} é ${resultado}`);

function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
//Exemplo de uso
let exemploDolar = 50;
let valorConvertido = converterDolarParaReal(exemploDolar);
console.log(`${exemploDolar} dólares equivalem a R$ ${valorConvertido}`);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala retangular: ${area} metros quadrados`);
    console.log(`Perímetro da sala retangular: ${perimetro} metros`);
}
//Exemplo de uso
let exemploAltura = 3; // em metros
let exemploLargura = 5; // em metros
calcularAreaPerimetroSalaRetangular(exemploAltura, exemploLargura);

function calcularAreaPerimetroSalaCircular(raio){
    //let pi = 3.14;
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${area} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro} metros`);
}
//Exemplo de uso
let exemploRaio = 4; // em metros
calcularAreaPerimetroSalaCircular(exemploRaio);

function mostrarTabuada(numero){
    for (let fator = 1; fator <= 10; fator++) {
        let produto = numero * fator;
        console.log(`${numero} X ${fator} = ${produto}`)
    }
}
//Exemplo de uso
let exemploFator = 7;
mostrarTabuada(exemploFator);