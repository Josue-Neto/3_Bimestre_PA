// Desenvolver um algoritmo que permita o usuário escolher o tipo de transporte irá utilizar. Uber, 99, Ônisbus e Trem

// Criar a variável que irá receber a opção
let tranporte= "Ônibus";

switch (tranporte) {
    case "Uber":
        console.log(`O tranporte escolhido foi ${tranporte}. Boa viagem!!!`)
        break;
        case "99":
            console.log(`O tranporte escolhido foi ${tranporte}. Boa viagem!!!`)
            break;
            case "Ônibus":
                console.log(`O tranporte escolhido foi ${tranporte}. Boa viagem!!!`)
                break;
                case "Trem":
                    console.log(`O tranporte escolhido foi ${tranporte} Boa viagem!!!`)
                    break;

    default:
    console.log("Esta opção de tranporte não está disponível")
}