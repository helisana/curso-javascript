

/****************************
 *        ID
 ****************************/


//selecionar e retornar elementtos do DOM
const animais = document.getElementById('animais');

console.log(animais);
console.log(animais.innerText);

/****************************
 *        class e tag
 ****************************/

//selecionar e retornar uma lista de elementos do Dom. 
/*
A lista retornada está ao vivo, ou seja, se elementos forem
adicionados, ela será automáticamente atualizada. 
*/

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

//Retorna um HTML collection

const ul = document.getElementsByTagName('ul');

//retorna o primeiro elemento
console.log(gridSection[0]);

//retorna todos
console.log(gridSection);


/****************************
 *        querySelector
 ****************************/
//retorna o primeiro elemento que combina com o seletor css


const animais2 = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem =document.querySelector('.animais-lista li:last-child');
const linksCss = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

//busca dentro do UL apelas

const navItem = primeiroUl.querySelector('li');

const primeiraLi =  document.querySelector('li');
console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// selecionar todos os elementos

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

//retorna um NODELIST = possui metodos e atributos que o html colection não possui

console.log(animaisImg[2]);


/*
    HTML COLLECTION não possui tantos métodos quanto NODE LIST

    ambos são array-like, parece array mas não são. O método do array
    forEach() por exemplo, existe apenas em NodeList


    ** é possivel transformar array-like em array de verdade usando
*/

//class list adiciona classes
primeiroUl.classList.add('grid-section');   

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSelectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHtml); //ao vivo
console.log(gridSelectionNode); //statico

// FOREACH -- o primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item da lista. Esse função pode receber 3 parâmetros:
// valorAtual, index e array

const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
    console.log(item); //o item atual
    console.log(index); //o numero do index
    console.log(array); //array completo
});
 

gridSelectionNode.forEach(function(item, index){
    console.log(index);
});

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function(item){
    console.log(item);
});

// ARROW FUNCTION

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    console.log(item);
});

//antes
let i = 0;

imgs.forEach(function(){ console.log(item)});
imgs.forEach(() => console.log(item));
