/*Desafios
Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibeMensagemClicado() {
    console.log('O botão foi clicado');
}

function exibeMensagemAmor() {
    alert('Eu amo JS');
}

function solicitaCidade() {
    let cidade;
    do {
    cidade = prompt('Digite o nome de uma cidade do Brasil:');

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(cidade)) {
        alert("Digite apenas letras.");
    }

    } while (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(cidade));

    alert(`Estive em ${cidade} e lembrei de você.`);
}


// Declara a função que solicitará dois números e exibirá a soma.
function solicitaNumeros() {

    // Declara a variável que armazenará o primeiro número digitado.
    let numero1;

    // Declara a variável que armazenará o segundo número digitado.
    let numero2;

    // Inicia um laço de repetição para solicitar o primeiro número.
    do {

        // Exibe uma caixa de diálogo e armazena o valor digitado como texto.
        numero1 = prompt('Digite o primeiro número inteiro:');

        // Verifica se o usuário cancelou o prompt ou digitou um valor inválido.
        if (numero1 === null || !/^-?\d+$/.test(numero1)) {

            // Exibe uma mensagem informando que apenas números inteiros são permitidos.
            alert('Digite apenas números inteiros.');
        }

    // Repete o laço enquanto o valor informado for inválido.
    } while (numero1 === null || !/^-?\d+$/.test(numero1));

    // Converte o valor válido de texto para número inteiro na base decimal.
    numero1 = parseInt(numero1, 10);

    // Inicia um laço de repetição para solicitar o segundo número.
    do {

        // Exibe uma caixa de diálogo e armazena o valor digitado como texto.
        numero2 = prompt('Digite o segundo número inteiro:');

        // Verifica se o usuário cancelou o prompt ou digitou um valor inválido.
        if (numero2 === null || !/^-?\d+$/.test(numero2)) {

            // Exibe uma mensagem informando que apenas números inteiros são permitidos.
            alert('Digite apenas números inteiros.');
        }

    // Repete o laço enquanto o valor informado for inválido.
    } while (numero2 === null || !/^-?\d+$/.test(numero2));

    // Converte o valor válido de texto para número inteiro na base decimal.
    numero2 = parseInt(numero2, 10);

    // Soma os dois números informados pelo usuário.
    let soma = numero1 + numero2;

    // Exibe o resultado da soma em uma caixa de diálogo.
    alert(`A soma dos números é: ${soma}`);
}


/*https://github.com/alura-cursos/js-curso-2/tree/desafio_1_respostas
Resolução dos desafios 1
Em uma carreira de desenvolvimento de software, a prática consistente da lógica de programação desempenha um papel fundamental na construção de bases sólidas. A lógica de programação não apenas permite a criação de algoritmos eficientes e soluções elegantes, mas também desenvolve a capacidade de pensar de forma estruturada e analítica. Essa habilidade é essencial para enfrentar desafios complexos e transformar problemas abstratos em implementações tangíveis.

Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem.

Sugestões de respostas
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:
No index.html, adicionamos no onclick o seguinte código:

<button onclick="exibirMensagemNoConsole()" class="button">Console</button>
Já no app.js:
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}
Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:
No index.html, adicionamos no onclick o seguinte código:

<button onclick="exibirAlerta()" class="button">Alert</button>
Já no app.js:
function exibirAlerta() {
    alert('Eu amo Js')
}
Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:
No index.html, adicionamos no onclick o seguinte código:

<button onclick="exibirPrompt()" class="button">Prompt</button>
Já no app.js:
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}
Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
No index.html, adicionamos no onclick o seguinte código:

 <button onclick="somandoDoisNumeros()" class="button">Soma</button>
Já no app.js:
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}*/



