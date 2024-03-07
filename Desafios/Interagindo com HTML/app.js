let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let cidade = prompt('Insira o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Insira um número:'));
    let numero2 = parseInt(prompt('Insira outro número:'));
    let resultado = numero1 + numero2;
    alert(`A soma de ${numero1} com ${numero2} é ${resultado}.`);
}