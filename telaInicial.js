let leitura = require("readline-sync");
let leituraConsole = require("./biblioteca/leitura");
let telasLogin = require("./telas/telaLogins");
let telasCadastros = require("./telas/telasCadastros");
let opcao;

function menuOpcoes() {
    console.log();
    console.log(`|--------------------- AIQBroca -------------------------|`);
    console.log(`|                                                        |`);
    console.log(`|--------------------- 1 - Login ------------------------|`);
    console.log(`|--------------------- 2 - Cadastro ---------------------|`);
    console.log(`|--------------------- 3 - Sair -------------------------|`);
    console.log();

    opcao = leituraConsole.leituraConsole(leitura);
    switch (opcao) {
        case "1":
            telasLogin.telaLoginUsuario();
            break;
        case "2":
            telasCadastros.telaCadastroUsuario();
            break;
        case "3":
            break;
        default:
            console.log(`Opção Inválida !`);
            menuOpcoes();
    }

}
menuOpcoes();