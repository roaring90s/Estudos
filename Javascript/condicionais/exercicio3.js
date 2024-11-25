
let produto = 250;

let pagamento = 'debito';
//Podemos fazer uma abstração ao invés de colocar as nomenclaturas, atribuir um numero para cada opção de pagamento ex. debito =1;

if (pagamento == 'debito') {
    let desconto = 0.10;
    let noDebito = produto - (produto * desconto);
    console.log('O produto no débito sairá por: R$', noDebito.toFixed(2));
}else if (pagamento == 'dinheiro' || pagamento == 'PIX' ){
    let desconto = 0.15;
    let aVista = produto - (produto * desconto);
    console.log('O produto à vista sairá por: R$', aVista.toFixed(2));
}else if (pagamento == 'duasVezes') {
    console.log ('O produto sairá por: R$', produto);
}else if (pagamento == 'acimaDuasVezes') {
    let juros = 0.10;
    let parcelasAltas = produto + (produto * juros);
    console.log('O produto sairá por: R$', parcelasAltas);
}