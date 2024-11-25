
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome =  nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);       
    }

    
}

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} tem a mesma idade que ${p1.nome}`);
    }

}

const Taylor = new Pessoa('Taylor', 34);

const Katy = new Pessoa('Katy', 40);

compararPessoas(Taylor, Katy);











/* const marcos = {
    nome: 'Marcos Antônio',
    idade: 20,
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);       

     descrever : function() {

    }
};

const atributo = 'idade';

console.log(marcos [atributo]);

*/