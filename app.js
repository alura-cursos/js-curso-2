let titulo = document.querySelector ('h1');
titulo.innerHTML = ('hora do Desafio');

function verificarClick() {
    console.log ('O botão foi clicado');
}

function exibirAlerta(){
    alert ('Eu amo JS');
}


function cidadeDoBrasil(){
    cidadeDoBrasil = prompt ('Me fale um nome de uma cidade do Brasil');
    alert (`Estive em ${cidadeDoBrasil} e lembrei de você`);
}

function somaDeNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}
