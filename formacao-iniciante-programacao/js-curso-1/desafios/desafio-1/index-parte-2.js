let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?')

if (idade >= 18) {
    alert(nome + ', por ter ' + idade + ' anos' + ', você pode tirar sua habilitação!');
    console.log(nome + 'pode tirar a habilitação.');
} else {
    alert(nome + ', por ter ' + idade + ' anos' + ', você não pode tirar sua habilitação ainda.');
}