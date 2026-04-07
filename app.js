document.querySelector("h1").textContent = "Hora do Desafio";

function botaoConsole() {
    console.log("O botão foi clicado");
}


function botaoAlerta() {
    alert("Eu amo JS");
}


function botaoPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    alert("Estive em " + cidade + " e lembrei de você");
}


function botaoSoma() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    
    let soma = num1 + num2;
    
    alert("O resultado da soma é: " + soma);
}