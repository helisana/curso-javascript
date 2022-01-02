
// Retorna uma lista com as classes do elemento. Permite adicionar e remover e verificar se contém

const menu = document.querySelector('.menu');

console.log(menu.className);

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); //adicionar classe
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo'); // remover classe
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo'); //substitui ativo por inativo

if (menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('não-possui-azul');
}

// antes era usado class name para manipular as classes 
// é uma string e é possível sobre escrever ela 

menu.className += ' vermelho'
console.log(menu.className);


// ATRIBUTOS

const animais = document.querySelector('.animais');
console.log(animais.attributes[0]); //class
console.log(animais.attributes[1]); //id
console.log(animais.attributes['class']); //class
console.log(animais.attributes['data-texto']); //data texto, por ter if precisa estra em string

// get attributes e set atributtes

// metodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); //inclui ou atualiza o atributo
img.hasAttribute('id'); //true ou false - verificar se possui o atributo
img.removeAttribute('alt'); //remove o alt


img.hasAttribute(''); //true ou false se tem algum atributo

//muito comum os de get e set

console.log(img.attributes);

/*************************************

 *  READ ONLY vs WRITABLE
 * 
 * existem propriedades que não permitem a mundaça de seus valores, essas 
 * são consideradas Read Only, ou seja, apenas leitura.
 * 
 * ** lembre se que podemos modificar o valor de uma propriedade 
 *    objeto.propriedade = '';
 */


animais.className; //string com o nome das classes
animais.className = 'azul';  //substitui completamente a string
animais.className += 'vermelho' //adiciona vermelho à string

animais.attributes = 'class="ativo"'; //não funciona, read-only