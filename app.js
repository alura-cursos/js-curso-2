let titulo = document.querySelector('h1');
titulo.innerHTML = 'Vamos começar nosso programa de soma!!!';

function verificarChute() {
    let numero1 = parseInt(prompt('Digite o primeiro número:')); 
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    alert(`O resultado dos números ${numero1} e ${numero2} é ${numero1 + numero2}`);
}