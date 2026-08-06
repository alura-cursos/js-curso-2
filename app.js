/*Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/

function calcularOperacao1() {
    const valor = Number(document.getElementById("valor-1").value);
    const resultado = document.getElementById("resultado-1");

    if (document.getElementById("valor-1").value === "") {
        resultado.textContent = "Digite um número.";
        return;
    }

    resultado.textContent = valor;
}