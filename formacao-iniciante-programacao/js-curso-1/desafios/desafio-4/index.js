// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas ao meu programa!');

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Pedro Afonso';
console.log('Olá ', nome);

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá ${nome}!`);

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt('Qual linguagem de programação você mais gosta?');
console.log(linguagemFavorita);

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 12;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 20;
let valor4 = 13;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre o ${valor3} e ${valor4} é igual a ${resultado2}.`);

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Qual a sua idade?');

if (idade >= 18) {
    console.log(`O usuário já é adulto. Ele tem ${idade} anos.`);
} else {
    console.log(`O usuário é menor de idade. Possui ${idade} anos.`);
}

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número inteiro, negativo ou positivo.');

if (numero > 0) {
    console.log(`O número digitado (${numero}) é positivo.`);
} else {
    if (numero == 0) {
        console.log(`O número digitado é zero.`);
    } else {
        console.log(`O número digitado (${numero}) é negativo`);
    }
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
let numeroEscolhido = 0;

while (numeroEscolhido < 10) {
    numeroEscolhido++;
    console.log(numeroEscolhido);
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 7;

if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random());

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(Math.random() * 10 + 1));

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random() * 1000 + 1));


