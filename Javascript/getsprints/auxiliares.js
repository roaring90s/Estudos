
const entradas = [5, 50, 10, 98, 23, 25, 100, 1];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
     //Outra forma de fazer um tipo de repetição, na chamada do gets.
    return valor;

}

function print(texto) {
    console.log(texto);
}

//Exportações alternativas:
//module.exports.gets = gets;
//module.exports.print = print;

module.exports = {
    gets: gets,
    print: print
};