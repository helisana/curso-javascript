//
var scroll = 1000;

scroll += 500;
console.log(scroll);

//atribua true para a variavel darCredito,
//caso o cliente possua carro e casa
// e false caso o contrario

var possuiCasa = true;
var possuiCarro = false;

var darCredito = (possuiCarro && possuiCasa) ? 'Crédito liberado' : 'Crédito não liberado'
console.log(darCredito);