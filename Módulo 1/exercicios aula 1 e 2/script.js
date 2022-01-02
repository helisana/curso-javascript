var minhaIdade = 24;
var idadeLivia = 12

if (minhaIdade > idadeLivia) {
    console.log('é maior');
} else {
    console.log('é menor');
}

// qual é o valor retornado da expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2); 
console.log(expressao);

//verificar se as variaveis são verdadeiras ou falsas

var nome = 'Júlia';
var idade = 28;
var PossuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!PossuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


//compara o total de habitantes do brasil com China (lvalor em milões)

var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}

//o que irá aparecer no console? 
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('verdadeiro'); 
} else {
    console.log('false');
}

//o que irá aparecer no console? 
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão'); 
} else {
    console.log('false');
}
