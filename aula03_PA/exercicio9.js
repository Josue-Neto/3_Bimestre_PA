// Desenvolva um programa JavaScript para uma empresa calcular a quantidade de horas extras semanais que um funcionário tem. Sabendo que a jornada de horas semanais do funcionário é de 40 horas, inserir as horas trabalhadas e calcular as horas excedentes. Se a jornada de trabalho do funcionário for maior do que 40 horas por semana, o programa exibirá uma mensagem " O funcionário trabalhou XXX horas extras". Caso contrário, o programa deverá exibir a mensagem: " O funcionário trabalhou sua jornada de 40 horas".

let HRtrabalhadas = 57;
let HRsemanais = 40;
let HRex = (HRtrabalhadas - HRsemanais);

if (HRtrabalhadas > HRsemanais){
    console.log(`O(a) funcionário(a) trabalhou ${HRex} horas extras.`);
} else{
    console.log(`O(a) funcionário(a) trabalhou sua jornada de 40 horas."`);
}