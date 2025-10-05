// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let contador = 1;
fatorado = 1;
function fatorial(numero) {
    while (contador <= numero) {
        fatorado = contador * fatorado;
        contador++;
    }
    return fatorado;
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converte(valor) {
    return valor * 4,80;
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function area(altura,largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área = ${area} e Perímetro = ${perimetro}`);
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu r que será fornecido como parâmetro. Considere Pi = 3,14.
function areaCirculo(r){
    let pi = 3.14;
    let area = pi * (r * r);
    let perimetro = 2 * pi * r;
    console.log(`Área do circulo = ${area} e Perímetro = ${perimetro}`)
}
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for (let i = 1; i < 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
