
/* function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrecimo;

}


console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15));

*/


function calcularIMC(peso, altura) {
    return IMC = peso / Math.pow(altura, 2); 
}

function classificarImc(IMC){
if (IMC < 18.5) {
    return 'Você está abaixo do peso!';
}else if (IMC >=18.5 && IMC < 25) {
    return 'Peso normal.';
}else if (IMC >= 25 && IMC < 30 ){
    return 'Acima do peso!';
}else if (IMC >= 30 && IMC < 40) {
    return  'Obeso.';
}else if (IMC > 40) {
    return 'Obesidade grave.';
}

}

(function main() {

let peso = 58;
let altura = 1.72;

const imc = calcularIMC(peso,altura);
console.log(classificarImc(IMC));

}) ();
