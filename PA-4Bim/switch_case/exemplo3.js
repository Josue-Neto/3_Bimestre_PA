// Escolher uma estação preferida do ano: "Primavera", "Verão", "Outono" ou "Inverso"

const op= -1 //Declaração de Variável

console.log("--------------------------------------------");
console.log("Digite 1: Primavera");
console.log("Digite 2: Verão");
console.log("Digite 3: Outono");
console.log("Digite 4: Inverno");
console.log("--------------------------------------------");
console.log("");

switch (op) {
    case 1:
    console.log(`A estação foi ${op}, Curta as flores!!!`);
    break;

    case 2:
    console.log(`A estação foi ${op}, Curta o Sol!!!`);
    break;

    case 3:
    console.log(`A estação foi ${op}, Curta seus passeios!!!`);
    break;

    case 4:
    console.log(`A estação foi ${op}, Curta um bom filme e um chocolate quente!!!`);
    break;

    default:
        console.log("Que triste... Você não gosta de nenhuma estação do ano! :(...")
}
console.log("--------------------------------------------");
