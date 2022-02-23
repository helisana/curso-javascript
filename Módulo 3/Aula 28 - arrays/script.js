

// Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser
// strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:
'Azul', preco: 2000}], function andar(nome) { console.log(nome)
},'text'];
dados[2]('Ford');
dados[1][2].cor; // azul

let teste = 'teste'


// Construção de Arrays
// Toda array herda os métodos e propriedades do protótipo do
// construtor Array.

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');
carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

// Os valores das array's não são
// estáticos


// Array.from()
// Array.from() é um método utilizado para transformar array-like
// objects, em uma array.

const obj = {
    0: 'lalala',
    1: 'lalalala',
    2: 'teste',
    length: 3,
}

const objArray = Array.from (obj);
console.log(objArray);

const li = document.querySelectorAll('li'); // NodeList
console.log(li);
const arrayli = Array.from(li); // Array
console.log(arrayli);
const carros2 = {
 0: 'Fiat',
 1: 'Honda',
 2: 'Ford',
 length: 4,
}

const carrosArray = Array.from(carros2);

// Array.isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano

let li2 = document.querySelectorAll('li'); // NodeList
Array.isArray(li); // false
li2 = Array.from(li2); // Array
Array.isArray(li2); // true


// Array.of(), Array() e new Array()
// Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessáriamente para utilizar o 
// construtor Array

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

const listaNomes = Array.of('Jurema', 'Cirineu', 'Claudinéia')

// Propriedades e Métodos do Prototype
// [].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

// Métodos Modificadores [].sort
// Os próximos métodos que vamos falar sobre, são métodos
// modificadores (mutator methods). Além de retornarem um valor, eles modificam a rray original [].sort organiza pelo unicode.

const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos3.sort();
instrumentos3; // ['Baixo', 'Guitarra', Violão]
const idades = [32,21,33,43,1,12,8]; // não será em ordem os números
console.log(idades);
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

// [].unshift() e [].push()
// [].unshift() adiciona elementos ao início da array e retorna o
// length da mesma. [].push() adiciona elementos ao final da array e retorna o lenght da mesma

const carros3 = ['Ford', 'Fiat', 'VW'];
carros3.unshift('Honda', 'Kia'); // 5
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
carros3.push('Ferrari'); // 6
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']

// [].shift() e [].pop()
// [].shift() remove o primeiro elemento da array e retorna o
// mesmo. [].pop() remove o último elemento da array e retorna o
// mesmo.

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros4.shift(); // 'Ford'
carros4; // ['Fiat', 'VW', 'Honda'];
const ultimoCarro = carros4.pop(); // 'Honda'
carros4; // ['Fiat', 'VW']

// [].reverse()
// [].reverse() inverte os itens da array e retorna a nova array.

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona
// valores na array a partir do index. Remove a quantidade de itens
// que for passada no segundo parâmetro (retorna esses itens).

const carros6 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros6.splice(1, 0, 'Kia', 'Mustang'); // []
carros6; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
carros6.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros6; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'

// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele
// irá copiar a array começando do inicio até o final e vai preencher a mesma com essa copia. Caso 
// omita os valores de início e final. ele irá utilizar como inicio o 0 e o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']



// Métodos de Acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam um array modificada.
// [].concat() irá concatenar  a array com o valor passado

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];
const maisTransportes = [].concat(transporte1, transporte2,'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van']

// [].includes(), [].indexOf() e [].lastIndexOf()

// [].includes(valor) veriica se a array possui o valor e retorna true ou false. 
// [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
//[].lastIndex(valor) retorna o index do ultimo

const linguagens = ['html', 'css', 'js', 'php', 'python',
'js'];
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5


// [].join()
// [].join(separador) junta todos os valores da array e retorna
// uma string com eles. Se você passar um valor como parâmetro,
// este será utilizado durante a junção de cada item da array.

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>


// [].slice()
// [].slice(inicio, final) retorna os itens da array
// começando pelo início e indo até o valor de final

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.slice(3); // ['php', 'python']
linguagens2.slice(1, 4); // ['css', 'js', 'php']
const cloneLinguagens = linguagens2.slice();
