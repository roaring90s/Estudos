
/*class Carro {
    marca;
    cor;
    gastoMedioKm;

    calcularGastoMedio(distancia, combustivel){
        return distancia  * this.gastoMedioKm * combustivel;
    }

    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }


}


const Ferrari = new Carro ('Ferrari', 'Vermelha', 1/12);

console.log(Ferrari.calcularGastoMedio(70, 5));

const Fiat = new Carro ('Fiat', 'Prata', 1/10);

console.log(Fiat.calcularGastoMedio(50, 6));

*/


class Pessoa {
    nome;
    peso;
    altura

    constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;

    }

    calcularIMC (peso, altura) {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        }else if (imc > 18.5 && imc < 25){
            return ('Peso normal');
        } else if (imc > 25){
        return ('Acima do peso');
    }
}
}


const Jose = new Pessoa ('José', 50, 1.80);

console.log((Jose.calcularIMC(50, 1.80)).toFixed(2));
console.log(Jose.classificarIMC());

const Toby = new Pessoa ('Toby', 70, 1.80);
console.log(Toby.classificarIMC());