
console.log(Math.random());
console.log(Math.E);


// console é um obj
//log é um método

console.table();
console.time();

//objeto 
a = {}

var height = 100;

var menu = {
    with: 800,
    height: 50,
    backgroundColor: '#CCC',
    metadeHeight() {
        return this.height / 2;
    }
}
//o obg tem acesso as variáveis fora dele


menu.backgroundColor = '#000'

var bg = menu.backgroundColor;
//pode adicionar novas propriedades
menu.color = 'blue';

//this fará referencia ao proprio obj

//verifica se em menu existe a propriedade color
menu.hasOwnProperty('color');