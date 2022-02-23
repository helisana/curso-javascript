/*********************************
 *      PROTOTYPE
 * 
 *  a propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
 * 
 */

function Pessoa(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou';
}

const tereza = new Pessoa('Tereza', 87, 'terezinha_2011@gmail.com');

console.log(Pessoa.prototype); //retorna um objeto
console.log(tereza.prototype); //retorna undefined

/**************************
 *  CONSTRUTORES NATIVOS
 * 
 *  Objetos, Funções, números, strings e outros tipos de dados são criados
 *  utilizando construtores. Esses construtores possuem um protótipo com propriedades
 * e métodos, que poderão ser acesssados pelo tipo de dado.
 * 
 */

const pais = 'Brasil'; 
const cidade = new String('Rio');

pais.charAt(0); //B
cidade.charAt(0); //R

String.prototype;

//quando queremos fazer alguma coisa com js, podemos ver o prototype e quais métodos podemos utilizar

/*************
 * é possível acessar a função do protótipo
 * 
 * é comum, principalmente em códigos antigos, o uso direto de funções do protótipo do construtor array.
 */

const lista = document.querySelectorAll('li');
console.log(lista);
// transforma em array
const listaArray = Array.prototype.slice.call(lista);
console.log(listaArray);

/**********************
 *  Métodos e objetos vs Protótipo
 * 
 * Nos objetos nativos existem métodos linkados diretamente ao 
 * Objeto e outros linkados ao protótipo 
 * 
 * 
 *  **dado.cosntructor.name, retorna o nome do construtor
 */

Array.from(lista);

Object.getOwnPropertyNames(Array); // 6 métodos
Object.getOwnPropertyNames(Array.prototype); //36 métodos 

//apenas os métodos do protótipo são herdados

[0,1,2].slice(); // existe
//[0,1,2].from(); // não existe



/***********************************************************
 *  ENTENDA O QUE ESTÁ SENDO RETORNADO
 * 
 * Os métodos e propriedades acessado com o . são referentes ao
 * tipo de dados que é retornado antes do .
 * 
 */

const Carro = {
    marca: 'Ford',
    preco: 2000,
    portas: 2,
    acelerar() {
        return true;
    }
}

Carro //objeto
Carro.marca; //String
Carro.preco; //Number
Carro.acelerar //Function
Carro.acelerar() //função executada - retorna um boolean
Carro.marca.charAt //Function