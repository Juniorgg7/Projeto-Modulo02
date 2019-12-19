let leitura = require("readline-sync");
let fs = require("fs");
let leituraConsole = require("./../biblioteca/leitura");
let login = require("./telaLogins");
let escolha;

exports.pagamento = function(valor) {

    let verifica = true;
    while (verifica) {
        console.log();
        console.log(`Escolha uma Forma de Pagamento !`);
        console.log();
        console.log(`1 - Dinheiro`);
        console.log(`2 - Cartão`);
        console.log(`3 - Ticket Refeição`);
        console.log();
    

        escolha = leituraConsole.leituraConsole(leitura);
        console.log();

        switch (escolha) {
            case "1":
                verifica = false;
                console.log();
                console.log(`|--------------------- AIQBroca -------------------------|`);
                console.log();
                console.log(`Pagamento em dinheiro !`);
                console.log(`Total: ${valor.toFixed(2)} R$`);
                
                console.log();
                console.log(`Finalizando o seu pedido...`);
                finalizandoPedido();
                break;
            case "2":
                verifica = false;
                console.log();
                console.log("Pagamento no cartão tem um acréscimo de 5% do valor total.");
                let valorComJuros = valor + (valor * 0.05);
                console.log(`Total: ${valorComJuros.toFixed(2)} R$`);
                
                console.log();
                console.log(`Finalizando o seu pedido...`);
                finalizandoPedido();
                break;
            case "3":
                verifica = false;
                console.log();
                console.log(`Pagamento em Ticket Refeição !`);
                console.log(`Total: ${valor.toFixed(2)} R$`);
                
                console.log();
                console.log(`Finalizando o seu pedido...`);
                finalizandoPedido();
                break;
            default:
                console.log(`Opção Invalida !`);
                break;
        }
    }

}

function finalizandoPedido() {
    setTimeout(function() {
        console.log();
        console.log(`|--------------------- AIQBroca -------------------------|`);
        console.log();
        console.log(`Pedido finalizado com sucesso !`);
        console.log();
     
    }, 5000);
   
    
}
