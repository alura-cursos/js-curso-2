let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function mostrarMensagem(){
    console.log("O botão foi clicado")
}

function mostrarAlerta(){
    alert('Eu amo JS.')
}

function mostrarPrompt(){
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${nomeCidade} e me lembrei de você.`)
}

function somar(){
    let num1 = parseInt(prompt('Digite um numero interio para soma: '));
    let num2 = parseInt(prompt('Digite outro número inteiro para soma: '));
    alert(`${num1} + ${num2} = ${num1 + num2}`)
}
