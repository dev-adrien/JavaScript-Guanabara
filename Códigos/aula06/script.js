
var nome = window.prompt("Qual é o seu nome?");
document.write(`É um prazer te conhecer, ${nome}!<br>`);
document.write(`Em maiúsculas: ${nome.toUpperCase()}</br>
                Em minúsculas: ${nome.toLowerCase()}<br>`);

var sal = Number.parseFloat(window.prompt("Digite o seu salário:"));
document.write(`O seu salário é: R$ ${sal.toFixed(2).replace('.', ',')}<br>`);

// document.write(`O seu salário com aumento de 15% é: R$ ${(sal * 1.15).toFixed(2).replace('.', ',')}`);

document.write(sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

