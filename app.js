let titulo = document.querySelector('h1');
titulo.innerHTML = 'Vamos começar nosso programa de soma!!!';

function verificarChute() {
    console.log('teste');
    let numero1 = parseInt(prompt('Digite o primeiro número:')); 
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let soma = numero1 + numero2;
    alert(`O resultado dos números ${numero1} e ${numero2} é ${soma}`);
}