function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

textoNaTela('h1', 'Bem vindo ao jogo do número secreto ');
textoNaTela('p', 'Digite um número entre 1 e 10');

function verificarChute() {
    console.log(getRandom());
}    

function getRandom() {
    return parseInt(Math.random() * 10 + 1);
}