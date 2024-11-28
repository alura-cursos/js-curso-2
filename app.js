let numeroSecreto = gerarNumeroAleatorio();
//let numeroSecreto = 7;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
                exibirTextoNaTela('p', 'Você descobriu o número secreto!');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
        }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












