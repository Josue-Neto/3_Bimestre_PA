// Desenvolva um programa JavaScript para receber 2 valores salariais como entrada. Através da estrutura condicional, criar um programa para exibir os valores salariais caso a média salarial seja superior a R$2000,00.

let sal1 = 2900;
let sal2 = 1500;
let mediaSal = ((sal1 + sal2)/2);

if (mediaSal > 2000){
    console.log (`Sua média salarial é de R$${mediaSal}, com o seu primeiro salário de R$${sal1} e o seu segundo salário de R$${sal2}.`);
} else {
    console.log (`Sua média salarial é menor ou igual que R$2000.`);
}