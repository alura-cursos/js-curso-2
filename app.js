let contador = 0;
let maiorNumero = 0;
let valor2 = 0;
let valor1 = 0;
function mostrarTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
function zerar() {
    document.querySelector('input').value = '';
}
function verificarChute() {
    if (contador == 0) {
        valor1 = parseInt(document.querySelector('input').value);
        zerar();
    } else {
        valor2 = parseInt(document.querySelector('input').value);
        zerar();
    }
    if (valor1 > valor2) {
        maiorNumero = valor1;
    } else {
        maiorNumero = valor2;
    }
    contador++;
    if (contador == 2) {
        alert(maiorNumero);
        contador = 0;
    }
}
mostrarTexto('h1', 'Irei mostrar qual o maior número!')
mostrarTexto('p', 'Digite aqui dois números')



