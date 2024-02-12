// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicarConsole() {
    console.log("O botão foi clicado");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function clicarAlerta() {
    alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function clicarPrompt() {
    let cidade = prompt("Escreva o nome de qualquer cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function clicarSoma() {
    let valor1 = prompt("Digite um número");
    let valor2 = prompt("Digite mais um número");
    let resultado = Number(valor1) + Number(valor2);
    alert(`O resultado da soma de ${valor1} mais ${valor2} é de ${resultado}.`);
}
