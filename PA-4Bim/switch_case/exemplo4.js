//Desenvolver um algoritmo que deverá ter opções de cálculo: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO e DIVISÃO. Conforme a escolha do usuário e de acordo com dois valores numéricos atribuídos, o cálculo deverá ser realizado. Bom trabalho!

const Num1 = 4;
const Num2 = 9;
let Soma = (Num1 + Num2);
let Subtracao = Num1 - Num2;
let Multiplicacao = Num1 . Num2;
let Divisao = Num1 / Num2;

     console.log("----------------------------------------------------------------------------------------------------");
     console.log("Escolha uma opção de cálculo, dentre: Soma, Subtração, Multiplicação e Divisão.");
     console.log("----------------------------------------------------------------------------------------------------");

switch (Soma) {
    case Soma:
        console.log(`A soma do número ${Num1} com o número ${Num2} é: ${Soma}`);
        break;

        case Subtracao:
            console.log(`A subtração do número ${Num1} com o número ${Num2} é: ${Subtracao}`);
            break;

            case Divisao:
                console.log(`A divisão do número ${Num1} com o número ${Num2} é: ${Divisao}`);
                break;

                case Multiplicacao:
                    console.log(`A multiplicação do número ${Num1} com o número ${Num2} é: ${Multiplicacao}`);
                    break;

    default:
    console.log("Não foi possivel identificar a operação");
}
     console.log("----------------------------------------------------------------------------------------------------");        