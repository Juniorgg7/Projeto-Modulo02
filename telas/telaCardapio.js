let leitura = require("readline-sync");
let fs = require("fs");
let leituraConsole = require("../biblioteca/leitura");
let caminhoEmpresas = 'C:/Users/Lenovo/Documents/Projeto Js/arquivos/empresas.json';
let pagamento = require("./telaPagamento");
let opcao;
let continuar;
let valorTotal2 = [];
var pedidos = [];
let valor = 0;
let verifica = true;
let verifica2= true;

exports.cardapio = function(restaurante) {
    let indice = Number.parseInt(restaurante);
    fs.readFile(caminhoEmpresas, function(err, conteudo) {
        let converterEmObjeto = JSON.parse(conteudo);
    
        console.log(`|--------------------- AIQBroca -------------------------|`);
        console.log(`Cardápio ${converterEmObjeto[restaurante - 1].nome}`);
        console.log();

        for (let x = 0; x < converterEmObjeto[restaurante - 1].cardapio.length; x++) {
            console.log(`${x + 1} - ${converterEmObjeto[restaurante - 1].cardapio[x]}`);
        }
        
        adicionandoLanche(restaurante, converterEmObjeto);
        
                
        while (verifica) {
            console.log();
            console.log(`Se você quiser adicionar mais alguma coisa digite 1, \nSe não quiser mais nada, digite qualquer outro valor.`);
            continuar = leituraConsole.leituraConsole(leitura);
            
            if (continuar != "1") {
                console.log();
                console.log(`|--------------------- AIQBroca -------------------------|`);
                console.log();
                console.log(`Seu(s) pedidos :`);
                console.log();

                for (let x = 0; x < pedidos.length; x++) {
                    console.log(`${x + 1} - ${pedidos[x]}`);
                    valor = valor + valorTotal2[x];
                }

                console.log(`Total: ${valor.toFixed(2)} R$`);
                console.log();

                pagamento.pagamento(valor);
                break;
                
               
            }
            adicionandoLanche(restaurante, converterEmObjeto);
            
        }

    });

}

function adicionandoLanche(indice, converterEmObjeto) {
    while(verifica2) {
        console.log();
        console.log(`Selecione uma opção do cardápio :`);
        
        opcao = leituraConsole.leituraConsole(leitura);
        let tamanho = converterEmObjeto[indice - 1].cardapio.length;
        
        
        if(opcao > tamanho || opcao == "0"){
            console.log();
            console.log(`Opção Inválida!`);
        }else {
            pedidos.push(converterEmObjeto[indice - 1].cardapio[opcao - 1]);
            valorTotal(indice, converterEmObjeto);
            break;
        }
    
    }
}

function valorTotal(indice, converterEmObjeto) {
    valorTotal2.push(converterEmObjeto[indice - 1].valor[opcao - 1]);

}
