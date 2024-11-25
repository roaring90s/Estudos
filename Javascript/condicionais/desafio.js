
let etanolPreco = 8;
let gasolinaPreco = 6;
let etanolLitrosKm = 2;
let gasolinaLitrosKm = 3;
let distancia = 79;
let tipoCombustivel = ('Gasolina')




if (tipoCombustivel === 'Etanol') {
    let mediaEtanol = distancia / etanolLitrosKm;
    valorGasto = mediaEtanol * etanolPreco;

    console.log('A viagem com etanol terá o custo de: R$' + valorGasto.toFixed(2));
} else {
    let mediaGasolina = distancia / gasolinaLitrosKm;
    valorGasto = mediaGasolina * gasolinaPreco;

    console.log('A viagem com gasolina terá o custo de: R$' + valorGasto.toFixed(2));
}