// OPERADORES LÓGICOS &&

true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão'
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true

if ((5 - 5) && (5 + 5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
  
}

if ((5 - 10) && (5 + 5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

//se ambos os valores forem true, ele
// irá retornar o último valpr verificado. 
// Se algum valor fos false, ele irá retornar
// o mesmo e não irá continuar a verificação dos próximos.




// OPERADORES LÓGICOS || 


true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cão'; //'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato 
(5 >= 5) || (3 < 6); //true
var cond = (5 - 5) || (5 + 5) && (10 - 2); //true
console.log(cond);


if ((5 - 10) || (5 + 5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

//Retorna o primeiro valor true que encontrar


//switch

var corFavorita = 'Amarelo';

switch (corFavorita) {
    case 'Amarelo':
        console.log('Olhe para o sol');
        break; //quebra caso a condição seja verdadeira
    case 'Vermelho':
        console.log('Olhe para o sofá');
        break; //quebra caso a condição seja verdadeira
    case 'verde':
        console.log('Olhe para as plantas');
        break; //quebra caso a condição seja verdadeira
    case 'Azul':
        console.log('Olhe para o céu');
         break; //quebra caso a condição seja verdadeira

    default:
        console.log('feche os olhos');

}