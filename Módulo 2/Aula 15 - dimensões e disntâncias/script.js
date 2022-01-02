
/******************************
 * HEIGHT E WIDTH
 * 
 * Essas são propriedades e métodos dos objetos element e HTMLElement, a maioria são Read Only
 */

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsettHeight; // height + padding + border
section.scrollHeight; //height total, mesmo dentro do scroll

//mesma coisa para o width


const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const raposaH2 = document.querySelector('h2');
raposaH2.offsetLeft;
const left = raposaH2.offsetLeft;

console.log(left);


/******* DISTÂNCIAS *******
 * getBoundingClientRect()
 * 
 * método que retorna um obj com valores de whidth, height, distâncias do elementos e mais
 * 
 */

const rect = section.getBoundingClientRect();
rect.left;
rect.bottom;
rect.x;
rect.y;
rect.height;
rect.right;
rect.top; 

if(raposaH2.top < 0){
    console.log('passou do elemnto');
}

/********** WINDOW ***************
 *  
 * JANELA 
 * 
 * 
 * ******** */

window.innerWidth; //width da janela
window.innerHeight; //height da janela
window.outerHeight; //soma dev tools tbm
window.outerWidth; //soma a barra de endereço tbm

window.pageYOffset; //distância total do scroll horizontal
window.pageXOffset; //distância total do scroll vertical

if (window.innerWidth < 600) {
    console.log('tela menor que 600px');
} else {
    console.log('é maior que 600px');
}

console.log(    
    window.innerWidth,//width da janela
    window.innerHeight, //height da janela
    window.outerHeight, //soma dev tools tbm
    window.outerWidth, //soma a barra de endereço tbm

    window.pageYOffset, //distância total do scroll horizontal
    window.pageXOffset, //d
)

//   MACHMEDIA()

const small = window.matchMedia('(max-widht: 600px)');
console.log(small);

if(small.matches) {
    console.log('Tela menor que 600px');
} else {    
    console.log('Tela maior que 600px');
}