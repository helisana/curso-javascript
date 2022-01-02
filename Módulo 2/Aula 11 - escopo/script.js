
//     ESCOPO DE FUNÇÃO

'use strict' //modo restrito


function mostrarCarro() {
    var carro = 'Corsa'
    console.log(carro);
}

mostrarCarro(); //Fusca no cosole
//console.log(carro); // carro is not defined

//evitar conflito de nomes de variáveis

/*

Declarar variaveis sem a palavra  VAR, LET ou CONST, cria uma variável 
global, que pode ser acessada em qualquer escopo, isso é um erro!!
*/


//ESCOPO DE BLOCO


/*
    Variáveis criadas com VAR, vazam o bloco. Por isso com a introdução do ES
    a melhor forma de declarar uma variável é com LET e CONST, pois respeitam o escopo do bloco
*/
   
if(true) {
    let carro = 'Fusca';
    console.log(carro); //'Fusca'
}

//console.log(carro) // carro is not defined

if(true) {
    const carro = 'Fusca';
    console.log(carro); //'Fusca'
}

//console.log(carro) // carro is not defined


for (let i = 0; i < 10; i++) {
    console.log(i);
}

// CONST - é uma constante então não se altera o valor dela

const mes = 'Dezembro';
console.log(mes);

//const mes = 'Janeiro'; //Identifier 'mes' has already been declared
//mes = 'Janeiro'; //erro: Assignment to constant variable.


//CONST com objeto, é possível alterar seus atributos

const data = {
    dia: 15,
    mes: 'Janeiro',
    ano: 2010,
}

console.log(data);

data.dia = 30; //funciona

console.log(data);

//data = 'Janeiro'; // não funciona

console.log(data);

//LET 

//mantém o escopo do bloco, impede a redeclaração, mas permite a modificação
//do valor da variável

let ano;

ano = 2020;
ano ++;
console.log(ano);

let ano = 2022; // erro  Identifier 'ano' has already been declared