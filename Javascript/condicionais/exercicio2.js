
let peso = 58;
let altura = 1.72;

let IMC = peso / (altura * altura);

//Posso fazer Math.pow(altura,2), que é uma função.

console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Você está abaixo do peso!');
}else if (IMC >=18.5 && IMC < 25) {
    console.log('Peso normal.');
}else if (IMC >= 25 && IMC < 30 ){
    console.log('Acima do peso!');
}else if (IMC >= 30 && IMC < 40) {
    console.log ('Obeso.');
}else if (IMC > 40) {
    console.log('Obesidade grave.');
}