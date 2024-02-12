// Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
    console.log("Olá, mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nomeDoUsuario(nome) {
    nome = prompt("Qual o seu nome?");
    console.log(`Olá, ${nome}`);
}
nomeDoUsuario();
