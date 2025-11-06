let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarChute(){
    console.log('o botão foi clicado!');

}

function alerta(){
    alert("Eua Amo JS");
}

function pedirCidade(){
    let cidade = prompt ("Escreva um nome de uma cidade do brasil:");
    alert("Estive em " + cidade +  " e lembrei de você!");
}

function somar(){
    let n1 = parseInt(prompt("Digite um número:"));
    let n2 = parseInt(prompt("Digite outro número:"));;
    let resultado = n1 + n2;
    alert("A soma de " + n1 + " e " + n2 + " é " + resultado );
}