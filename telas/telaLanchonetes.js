let leitura = require("readline-sync");
let fs = require("fs");
let leituraConsole = require("../biblioteca/leitura");
let cardapio = require('./../telas/telaCardapio');
let caminhoEmpresas = 'C:/Users/Lenovo/Documents/Projeto Js/arquivos/empresas.json';
let opcao = 0;
let verifica = true;

exports.opcoesLanchonetes = function() {
    
    fs.readFile(caminhoEmpresas, function(err, conteudo) {
        let converterEmObjeto = JSON.parse(conteudo);
        while (verifica) {
        console.log(`-------- Onde você quer lanchar hoje ? --------`);
        console.log();

        for (let x = 0; x < converterEmObjeto.length; x++) {
            console.log(`${x+1} - ${converterEmObjeto[x].nome}`);
        }
        opcao = leituraConsole.leituraConsole(leitura);
        console.log();
        if(opcao > converterEmObjeto.length) {
            console.log(`Digite uma opção válida !`);    
            console.log();
        }else {
            verifica = false;
            cardapio.cardapio(opcao);
        }
   
    }
    });
}