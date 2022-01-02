
// 1 - Atribuição

var num = 20;

num = num + 10;
console.log(num);

//   ou

num += 10;

console.log(num);

num1 = 20
num2 = 10

num1 /= num2;

console.log(num1);


//operador ternário

/*
    geralmente utilizado quando precisamos atribuir um valor
    para a variavel, dependendo da condição
*/

var idade = 18;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber' : 'Não pode beber';
console.log(podeBeber);

// if abreviado

var possuiCarro = true;

if(possuiCarro) console.log('Possui carro');
else console.log('não possui carro');


// ou

if(possuiCarro)
    console.log('Possui carro');
else 
    console.log('não possui carro');
