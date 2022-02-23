/*********************************
 *      OBJETOS
 * 
 * criar um objeto é simples, basta definirmos uma variável e 
 * iniciar a definição de seu valor com chaves {}
 * Mas e se precisarmos criar um objeto novo, com as mesmas caracteristicas 
 * do anterior? 
 * 
 */



//  const carro = {
//     marca = 'Marca',
//     preco = 0
// }

// const civic = carro;
// civic.marca = 'Honda';
// civic.preco = 40.00000;

// const palio = carro;
// palio.marca = 'Fiat';
// palio.preco = 30.0000;

// assim não funciona


/**********************************
 *      CONSTRUCTOR FUNCTIONS
 * 
 * Para isso existem as Construtor Function, ou seja,
 * funções construtoras que são responsáveis por construir novos objetos
 * sempre que chamamos as mesmas.
 * 
 */

function Carro() {
    this.marca = 'Marca',
    this.preco = 0;
}

// quando vamos iniciar um objeto, utilizamos a palavra New

/***************
 *  NEW KEYWORD
 * 
 * A palavra chave new é responsável por crir uma nova instância do objeto
 * baseado na função que passamos a frente dela
 * 
 */

const civic = new Carro();

// 1 . cria a instância do objeto
//civic = {}

// 2 . define o protótipo
//honda.prototype = Carro.prototype;

// 3. aponta a variável this  para o objeto
//this = civic;

//4 . executa a função, substituindo o this pelo objeto
civic.marca = "Honda";
civic.preco = 0;

const corolla = new Carro();
corolla.marca = 'Toyota',
corolla.preco = 58.000

console.log(corolla);

// com parametros

function Roupa(cor, tamanho){
    this.cor = cor;
    this.tamanho = tamanho;
}

const blusa = new Roupa('azul', 'M');


/***************************************
 *         THIS KEYWORD
 * 
 * o this faz referência ao próprio objeto construído com a 
 * Constructor Function
 * 
 * Variáveis dentro do construtor estão protegidas 
 * 
 */

function Moto(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca; //o this da acesso a instancia do obj
    this.preco = precoFinal; //o this da acesso a instancia do obj
    console.log(this);
}

const honda = new Moto('Honda', 3000);

// taxa e preço final não será acessivel, ou seja, esses dados estão protegidos



/************************
 *  EXEMPLO REAL
 * 
 * Quando mudamos a propriedade seletor, o objeto Dom irá
 * passar a selecionar o novo seletor em seus métodos
 * 
 */

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
        
//     },
//     ativar() {
//         this.element().classList.add('ativo');
//     }
// }

// Dom.ativar(); //adiciona ativo ao li
// Dom.seletor = 'ul'; //ul passa a ser o elemento
// Dom.ativar(); //adiciona ativo ao ul


// lembre-se de usar parametros
function Dom(seletor) {
    this.seletor = seletor;
    this.element = function() {
        return document.querySelector(this.seletor);  
    },
    this.ativar = function() {
        this.element().classList.add('ativo');
    }
}

const li = new Dom('li');
console.log(li);

const ul = new Dom('ul');
console.log(ul);
console.log(ul.element());
ul.ativar();

// Um objeto criado com um construtor não irá influenciar
//em outro criado com o mesmo construtor

function Dom2() {
    this.seletor = 'li';
    const element = document.querySelector(this.seletor);
    this.ativo = function (){
        element.classList.add('ativo');
    }
}



const lista = new Dom2();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom2();
lastLi.seletor = 'li:last-child';
lastLi.ativo();
console.log(lastLi);


function Pessoa() {
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + ' andou')
    }
}