let leitura = require("readline-sync");
let leituraConsole = require("./../biblioteca/leitura");
let telaLanchonetes = require('./telaLanchonetes')
let fs = require("fs");
let caminhoUsuarios = 'C:/Users/Lenovo/Documents/Projeto Js/arquivos/usuarios.json';
let verifica = true;
let emailUsuario;
let senhaUsuario;
var email;
var senha;

exports.telaLoginUsuario = function() {

    fs.readFile(caminhoUsuarios, function(err, conteudo) {
        let converterEmObjeto = JSON.parse(conteudo);

        while (verifica) {
            console.log();

            console.log(`|--------------------- AIQBroca -------------------------|`);
            console.log();
    
            console.log(`Digite seu Email:`);
            emailUsuario = leituraConsole.leituraConsole( leitura);
            console.log();

            console.log(`Digite sua Senha:`);
            senhaUsuario = leituraConsole.leituraConsole( leitura);
            console.log();
            console.log(`|--------------------- AIQBroca -------------------------|`);

            console.log();
            
            for (let x = 0; x < converterEmObjeto.length; x++) {
                if (emailUsuario == converterEmObjeto[x].email && senhaUsuario == converterEmObjeto[x].senha) {
                    email = emailUsuario;
                    senha = senhaUsuario;
                    exports.retornarNome = function() {
                        return nome(converterEmObjeto, x)
                    }
                    break;
                }
            }
            if (emailUsuario == email && senhaUsuario == senha) {
                verifica = false;
                console.log(`Logado com sucesso !`);
                console.log();
                telaLanchonetes.opcoesLanchonetes();

            } else {
                console.log(`Email ou Senha Incorretos !`);
                console.log(`Tente Novamente !`);
                console.log();
            }
        }

    });

}

function nome(nomeUsuario, x) {
    return nomeUsuario[x].nome;
}