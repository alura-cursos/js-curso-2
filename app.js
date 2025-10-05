let qntdTentativa = 1;
let numeroMáximo = 10;
let numerosJaUsados = [];
let numeroSorteado = getRandom();
function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value)
    if (numeroSorteado == chute) {
        let tentativa = (qntdTentativa == 1) ? 'tentativa' : 'tentativas';
        textoNaTela('h1', 'Você ganhou!');
        textoNaTela('p', `Parabéns, você acertou com ${qntdTentativa} ${tentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    } else {
        if (chute < numeroSorteado) {
            maiorMenor = 'Maior';
        } else {
            maiorMenor = 'Menor';
        }
        errou();
    }
    qntdTentativa++;
    zerar();
}
function reiniciar() {
    qntdTentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    iniciar();
    numeroSorteado = getRandom();
}
function getRandom() {
    let numeroEscolhido = parseInt(Math.random() * numeroMáximo + 1);
    if (numerosJaUsados.length == numeroMáximo) {
        numerosJaUsados = [];
    }
    if (numerosJaUsados.includes(numeroEscolhido)) {
        return getRandom();
    } else {
        numerosJaUsados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function zerar() {
    document.querySelector('input').value = '';
}
function iniciar() {
    textoNaTela('h1', 'Bem vindo ao jogo do número secreto ');
    textoNaTela('p', `Digite um número entre 1 e ${numeroMáximo}`);
}
function errou() {
    textoNaTela('h1', 'Você errou.');
    textoNaTela('p', `O número sorteado é ${maiorMenor}`);  
}
iniciar();
