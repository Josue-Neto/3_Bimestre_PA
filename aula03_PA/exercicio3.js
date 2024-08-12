// Desenvolva um programa para calcular a media de um(a) estudante com base em duas notas. Se a nota for maior ou igual a 7, deverá apresentar a mensagem: "Você está aprovado(a) com a media (inserir a media calculada). Caso contrário, deverá apresentar a mensagem: "Você está reprovado(a) com a medía (inserir a media calculada). Você precisa estudar mais!".

let nota1= 8;
let nota2= 6;
let media= ((nota1+nota2)/2);

if(media >= 7){
    console.log(`Você está aprovado(a) com a média ${media}, parabéns.`);
} else {
    console.log(`Você está reprovado(a) com a médía ${media}. Você precisa estudar mais!`);
}