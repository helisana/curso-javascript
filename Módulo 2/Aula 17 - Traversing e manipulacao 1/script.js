/***********************************
 *  outerHTML, innerHTML, e innerText
 * 
 *  propriedades que retornam uma string contendo o html ou texto. É
 * possível atribuir um novo valor para as mesmas
 * 
 *  element.innerText = 'novo texto' 
 */

const menu =  document.querySelector('.menu');

menu.outerHTML; //todo o html do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags

const texto = menu.innerText; // a tag vai como texto
const html = menu.innerHTML; // a tag é renderizada

console.log(texto);
console.log(html);

const titulo = document.querySelector('.titulo');

titulo.innerHTML = '<p>Titulozinho</p>' // mantem a tag pai H1
titulo.outerHTML = '<p>Titulozinho</p>' // substitui a tag pai H1


/*********************************
 *  TRANSVERSING - como navegar pelo DOM, utilizando suas 
 *  propriedades e métodos.
 */

const lista = document.querySelector('.animais-lista');
console.log(lista);


lista.parentElement; //pai
lista.parentElement.parentElement// pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; //elemento abaixo

lista.children; //HTMLcollection com os filhos
lista.children[0]; //determinado item da lista
lista.children[--lista.children.lenght]; //ultimo item da lista

lista.querySelectorAll('li'); //todas as LI's
lista.querySelector('li:last-child'); //ultimo filho


/************************************************
 * ELEMENT vs NODE
 * 
 *Eelement's representam um elemento html, ou seja, uma tag. 
 * Node representa um nó, e pode ser um element, texto, comentário,
 * quebra de linha, e mais
 * 
 *  **geralmente estamos atrás de um elemento e não de qualquer node em si
 */

    lista.previousElementSibling; //elemento acima
    lista.previousSibling; //node acima
    
    lista.firstChild; //primeiro node child
    lista.childNodes; // todos os nodes child



 /************************************************
  *     MANIPULAR ELEMENTOS
  * 
  *     É possível manipular elementos no dom com métodos de Node
  */

    const contato = document.querySelector('.contato');
    console.log(contato);
    console.log(lista);

    contato.appendChild(lista); //move lista para o final de contato
    //console.log(contato);

    //contato.insertBefore(lista, titulo); //insere lista antes de titulo
    //titulo tem que ser filho de contato
    console.log(contato);
    //contato.removeChild(titulo); //remove titulo de contato
    //contato.replaceChild(lista, titulo); //substitui titulo


    /************************
     *      NOVOS ELEMENTOS 
     * 
     * Podemos crianr novos elementos com o método createElement()
     * 
    */

    const novoElemento = document.createElement('h1');
    novoElemento.innerText = 'Novo Título';
    novoElemento.classList.add('titulo');

    animais.appendChild(novoElemento);


    
    /************************
     *      CLONAR ELEMENTOS 
     * 
     * Todo elemento selecionado é único. Para criarmos um novo elementi baseado no anterior
     * é necessário utilizar o método cloneNode()
     * 
     * TRUE sinaliza para clonar os filhos desse elemento
     * FALSE clona só a tag que envolve
    */

    const cloneTitulo = titulo.cloneNode(true);
    contato.appendChild(cloneTitulo);
    console.log(cloneTitulo)

