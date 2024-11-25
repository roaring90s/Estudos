
let combu_prec = 6.10;
let dist_km = 11470;
let km_lit = 7;

let litrosConsumidos = dist_km / km_lit;
let valorGasto = litrosConsumidos * combu_prec;

console.log('A distância para se realizar a viagem é de: R$ ' + valorGasto.toFixed(2));
