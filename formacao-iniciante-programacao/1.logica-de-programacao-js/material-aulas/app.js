alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
console.log(`O usuário escolheu ${chute}`);
console.log('Resultado da comparação: ', chute == numeroSecreto);

// enquanto (while) o chute não for igual (!=) ao numeroSecreto:
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se (if) o chute for igual (==) ao numero secreto - se não (else) daremos dicas
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // A cada tentativa vamos somar mais 1 no valor da variável tentativas
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentavivas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1){
//     alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }