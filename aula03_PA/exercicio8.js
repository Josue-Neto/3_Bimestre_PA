// Crie um programa JavaScript para identificar, com base na idade de uma pessoa, se o voto é obrigatório ou opcional. Através da estrutura condicional, criar um programa para exibir o requisito de votação com base na idade fornecida.

let nome = "Leopoldo";
let idade= 17;

if (idade >= 18){
    console.log(`Olá ${nome}, você possui ${idade} anos, então seu voto é obrigatório.`);
} else {
    console.log(`Olá ${nome}, você possui ${idade} anos, então seu voto ainda é opcional.`);
}