
const {gets, print} = require('./auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}

/*let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];

    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
*/

//Método alternativo
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets ();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
    
}

print(maiorValorEncontrado);

/*const pessoa = {
    nome: 'Marcos'
};
*/
