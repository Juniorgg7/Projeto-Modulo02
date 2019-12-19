let leitura = require("readline-sync");
let leituraConsole = require("./../biblioteca/leitura");
let lanchonete = require('./../telas/telaLanchonetes');
let fs = require("fs");
let caminhoUsuarios = 'C:/Users/Lenovo/Documents/Projeto Js/arquivos/usuarios.json';
let emailUsuario;
let nomeUsuario;
let senhaUsuario;


exports.telaCadastroUsuario = function() {
    console.log();
    console.log(`|--------------------- AIQBroca -------------------------|`);
    console.log();
    console.log(`Digite um Email Válido !`);
    emailUsuario = leituraConsole.leituraConsole(leitura);
    console.log();
    console.log(`Digite seu Nome :`);
    nomeUsuario = leituraConsole.leituraConsole(leitura);
    console.log();
    console.log(`Crie uma Senha Bem Forte !`);
    senhaUsuario = leituraConsole.leituraConsole(leitura);

    fs.readFileSync(caminhoUsuarios, 'utf-8');
    const config = require('./../arquivos/usuarios');

    let contaASerAdicionada = Object.values(config);

    let dadosUsuario = {
        email: emailUsuario,
        nome: nomeUsuario,
        senha: senhaUsuario,
    }

    contaASerAdicionada.push(dadosUsuario);

    fs.writeFile(caminhoUsuarios, JSON.stringify(contaASerAdicionada), function(err) {
        console.log();
        console.log(err || "Cadastro efetuado com sucesso !");
        console.log();
        console.log(`|--------------------- AIQBroca -------------------------|`);
        console.log();
        lanchonete.opcoesLanchonetes();
    });

}