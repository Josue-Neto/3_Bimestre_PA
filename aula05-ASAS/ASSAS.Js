// Definição dos preços
// Passagens Para O Norte Do Brasil
let NorteBR_Economica = 2500;
let NorteBR_Economica_Kids = 1800;
let NorteBR_Executiva = NorteBR_Economica + (NorteBR_Economica * 20) / 100;
let NorteBR_Executiva_Kids = NorteBR_Economica_Kids + 20;

// Passagens Para O Sul Do Brasil
let SulBR_Economica = 3000;
let SulBR_Economica_Kids = 3000;
let SulBR_Executiva = 4000;
let SulBR_Executiva_Kids = 4000;

// Voos Internacionais
let Classe_Economica_Asia = 4600;
let Classe_Executiva_Asia = 6000;
let Classe_Economica_Europa = 5800;
let Classe_Executiva_Europa = 7300;
let Classe_Economica_Africa = 4200;
let Classe_Executiva_Africa = 6900;

// Definição dos passageiros
let Passageiros_Adultos = 34;
let Passageiros_Kids = 13;

// Definição do destino e classe (exemplo)
let destino = 'Norte'; // Pode ser 'Norte', 'Sul', 'Ásia', 'Europa', ou 'África'
let classe = 'Executiva'; // Pode ser 'Econômica' ou 'Executiva'

// Variáveis para o cálculo
let custoTotal = 0;
let totalPassagensAdultos = 0;
let totalPassagensKids = 0;
let totalExecutiva = 0;
let totalEconomica = 0;

// Cálculo do custo com base no destino e na classe
if (destino === 'Norte') {
    if (classe === 'Econômica') {
        custoTotal = (Passageiros_Adultos * NorteBR_Economica) + (Passageiros_Kids * NorteBR_Economica_Kids);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = 0;
        totalEconomica = Passageiros_Adultos + Passageiros_Kids;
    } else if (classe === 'Executiva') {
        custoTotal = (Passageiros_Adultos * NorteBR_Executiva) + (Passageiros_Kids * NorteBR_Executiva_Kids);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = Passageiros_Adultos + Passageiros_Kids;
        totalEconomica = 0;
    }
} else if (destino === 'Sul') {
    if (classe === 'Econômica') {
        custoTotal = (Passageiros_Adultos * SulBR_Economica) + (Passageiros_Kids * SulBR_Economica_Kids);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = 0;
        totalEconomica = Passageiros_Adultos + Passageiros_Kids;
    } else if (classe === 'Executiva') {
        custoTotal = (Passageiros_Adultos * SulBR_Executiva) + (Passageiros_Kids * SulBR_Executiva_Kids);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = Passageiros_Adultos + Passageiros_Kids;
        totalEconomica = 0;
    }
} else if (destino === 'Ásia') {
    if (classe === 'Econômica') {
        custoTotal = (Passageiros_Adultos * Classe_Economica_Asia) + (Passageiros_Kids * Classe_Economica_Asia);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = 0;
        totalEconomica = Passageiros_Adultos + Passageiros_Kids;
    } else if (classe === 'Executiva') {
        custoTotal = (Passageiros_Adultos * Classe_Executiva_Asia) + (Passageiros_Kids * Classe_Executiva_Asia);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = Passageiros_Adultos + Passageiros_Kids;
        totalEconomica = 0;
    }
} else if (destino === 'Europa') {
    if (classe === 'Econômica') {
        custoTotal = (Passageiros_Adultos * Classe_Economica_Europa) + (Passageiros_Kids * Classe_Economica_Europa);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = 0;
        totalEconomica = Passageiros_Adultos + Passageiros_Kids;
    } else if (classe === 'Executiva') {
        custoTotal = (Passageiros_Adultos * Classe_Executiva_Europa) + (Passageiros_Kids * Classe_Executiva_Europa);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = Passageiros_Adultos + Passageiros_Kids;
        totalEconomica = 0;
    }
} else if (destino === 'África') {
    if (classe === 'Econômica') {
        custoTotal = (Passageiros_Adultos * Classe_Economica_Africa) + (Passageiros_Kids * Classe_Economica_Africa);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = 0;
        totalEconomica = Passageiros_Adultos + Passageiros_Kids;
    } else if (classe === 'Executiva') {
        custoTotal = (Passageiros_Adultos * Classe_Executiva_Africa) + (Passageiros_Kids * Classe_Executiva_Africa);
        totalPassagensAdultos = Passageiros_Adultos;
        totalPassagensKids = Passageiros_Kids;
        totalExecutiva = Passageiros_Adultos + Passageiros_Kids;
        totalEconomica = 0;
    }
}

// Exibindo o resultado
console.log(`Total de passagens adultas: ${totalPassagensAdultos}`);
console.log(`Total de passagens infantis: ${totalPassagensKids}`);
console.log(`Total de passagens Executiva: ${totalExecutiva}`);
console.log(`Total de passagens Econômica: ${totalEconomica}`);
console.log(`Custo total da viagem: R$ ${custoTotal.toFixed(2)}`);
