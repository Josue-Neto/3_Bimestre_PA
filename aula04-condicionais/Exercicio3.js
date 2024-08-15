// Criar um programa para autenticar a entrada de um usuário por meio de seu login e senha. O login correto será: "root" e a senha será "info@1234". Se os dados estiverem corretos, deverá aparecer a mensagem: "Usuário(a) Autenticado(a)". Se os dados estiverem errados, deverá aparecer a mensagem: "Dados não Conferem. Procure o Administrador". Deverão fazer em javascript e diagrama

const login = "root";
const senha = "info@1234";

if (login==="root" && senha==="info@1234"){
    console.log("Usuário(a) Autenticado(a)");
} else {
    console.log("Dados não Conferem. Procure o Administrador.");
}