//crie um array com os anos que o Brasil ganhou a copa


var copa = [1958, 1962, 1970, 1994, 2002];

for (i = 0; i < copa.length; i++) {
    console.log('O Brasil ganhou a copa de ' + copa[i]);
}

var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];


for(i = 0; i < frutas.length; i++){
    if(frutas[i] === 'Pera'){
        console.log('achei a Pera!')
        break;
    }
}


var ultimaFruta = frutas[frutas.length - 1 ];

console.log(ultimaFruta);
console.log(frutas);
