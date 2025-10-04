let contador = 0;
let altura = 0;
let peso = 0;
function mostrarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function caucularIMC(peso,altura) {
    return peso / (altura * altura);
}
function zerar() {
    document.querySelector('input').value = '';
}
function verificarChute() {
    if (contador == 0) {
        altura = parseFloat(document.querySelector('input').value);
        contador++;
        zerar();
        mostrarTexto('p', 'Agora digite aqui seu peso:');
    } else {
        peso = parseFloat(document.querySelector('input').value);
        zerar();
        mostrarTexto('p', `Seu IMC atual é de ${caucularIMC(peso,altura)} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}
function reiniciar() {
    bemVindo();
    contador = 0;
    peso = 0;
    altura = 0;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
function bemVindo() {
    mostrarTexto('h1', 'Bem vindo a Calculadora de IMC!');
    mostrarTexto('p', 'Digite aqui sua altura:');
}
bemVindo();
