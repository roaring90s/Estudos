/*
function meuNome(name) {
    return ('Seu nome é ' + name);
}

meuNome('Marcos');



function verificarIdade(idade){

if (idade >= 18) {
    console.log (meuNome('Marcos ') + 'Você é maior de idade');
} else if (idade < 18){
    return 'Você é menor de idade;';
}

};

console.log(verificarIdade(20));

*/

let produto = 100;
let pagamento = 'acimaDuasVezes';

//Podemos fazer uma abstração ao invés de colocar as nomenclaturas, atribuir um numero para cada opção de pagamento ex. debito =1;

function aplicarDesconto(produto, desconto){
    return noDebito = produto - (produto * (desconto/100));
 
}

function aplicarJuros(produto, juros){
    return parcelasJuros = produto  + (produto * (juros/100));
}



if (pagamento == 'debito') {

    console.log('O produto no débito sairá por: R$', aplicarDesconto(produto,10));
}else if (pagamento == 'dinheiro' || pagamento == 'PIX' ){
    desconto = 0.15;
    console.log('O produto à vista sairá por: R$', aplicarDesconto(produto, 15));
}else if (pagamento == 'duasVezes') {
    console.log ('O produto sairá por: R$', produto);
}else if (pagamento == 'acimaDuasVezes') {
    console.log('O produto sairá por: R$', aplicarJuros(produto, 10));
}
