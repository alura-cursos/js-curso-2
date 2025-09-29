function mostrarTexto(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
mostrarTexto('h1', 'Calculadora de média!');
mostrarTexto('p', 'Coloque aqui 3 números para calcular a média:');

let soma = 0;
let contador = 0;

function calcularMedia(soma, contador) {
    return (soma / contador);
}
function verificarChute() {
    let valor = parseInt(document.querySelector('input').value);
    soma = soma + valor;
    document.querySelector('input').value = '';
    contador++;

    if (contador == 3) {
        alert(calcularMedia(soma, contador));
        contador = 0;
        soma = 0;
    }
}