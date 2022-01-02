//addEventListener

/**************
 * adiciona uma função ao elemento, esta chamada de callback
 * que será ativada assim que certo evento occorrer neste elemento 
 * 
 * elemento.addEventListener(evento, callback, options)
 * 
 * o terceiro parâmetro é opcional
 * 
***************/
/*
const img = document.querySelector('img');

img.addEventListener('click', function(){
    console.log('clicou!!');
});

//arrow function

img.addEventListener('click',() => {
    console.log('clicou!!');
});

*/

/***************************
 *      CALLBACK
 * 
 *  Uma boa prática é separar a função de callback do assEventListener
 * ou seja, delcarar a função ao invés de passar diretamente uma função anônima
 * 
 */

const itensMenu = document.querySelector('.menu a');

itensMenu.addEventListener('click', callback); //forma correta de chamar a função
//chama a função 

function callback() {
    console.log('clicou no menu');
}

itensMenu.addEventListener('click', callback()); //undefined - função ativada

itensMenu.addEventListener('click', function(){
    console.log('clicou!');
}); //passa a função direto

//arrow function
itensMenu.addEventListener('click', () => {
    console.log('clicou');
})


/***********************
 *  EVENT
 * 
 *  O primeiro parâmetro do callback é referente ao evento
 * que ocorreu
 * 
 * normalmente usam 'e' no lugar de 'event'
 */

const titulo = document.querySelector('h1');

function callbackTitulo(event){
    console.log(event);
}

titulo.addEventListener('click', callbackTitulo);


/********************************
 *  TARGET - é o elemento que clicou
 * 
 *  CURRENT TARGET - é o elemento selecionado
 * 
 *  
 * 
 */

    const animaisLista = document.querySelector('.animais-lista');

    animaisLista.addEventListener('click', callbackLista);

    function callbackLista(event){
        console.log(event.currentTarget);
        console.log(event.target);
    }

    console.log(animaisLista);

    /**********************************
     *     PREVENT DEFAULT
     * 
     * previne o comportamento padrão do evento do browser.
     * no caso de um link externo, por exemplo, irá previnir que 
     * o link seja ativado
     * 
     */

    const linkExterno = document.querySelector('a[href^="http"]');

    function handleLinkExterno(event){
        event.preventDefault();
        console.log(event.currentTarget.href);
    }

    linkExterno.addEventListener('click', handleLinkExterno);


    /*******************************
     *      THIS
     * 
     * A palavra THIS é uma palavra especial do JavaScript que pode fazer
     * referência a diferentes objetos dependendo do contexto. No caso de 
     * eventos, ela fará referência ao elemento em que addEventListener foi
     * adicionado.
     *  
     */

    const img = document.querySelector('img');

    function clickImg (event) {
        console.log(this); //retorna a imagem
        console.log(this.getAttribute('src'));        
        console.log(event.currentTarget); //retorna a imagem
    }

    img.addEventListener('click', clickImg);

    // Geralmente igual ao event.currentTarget



    /************************************
     *      DIFERENTES EVENTOS
     * 
     *  click,
     * scroll,
     * resize,
     * keydown,
     * keyup,
     * mouseenter,
     * mouseleave.
     * ...
     * 
     * https://developer.mozilla.org/pt-BR/docs/Web/Events
     * 
     * Eventos podem ser adicionados a diferentes elementos, como
     * WINDOW e document
     * 
     * 
     */

    const h2 = document.querySelector('h2');

    function handleEvent(event) {
        console.log(event.type, event);

    }

    h2.addEventListener('click', handleEvent);
    h2.addEventListener('mouseenter', handleEvent);
    window.addEventListener('scroll', handleEvent);
    window.addEventListener('keydown', handleEvent);


    /************************************
     *      KEYBOARD
     * 
     *  Você pode adicionar atalhos para facilitar a navegação no seu site
     * através de eventos do KEYBOARD
     * 
     */

    function hadleKeyboard(event){
        if(event.key === 'a') {
            document.body.classList.toggle('azul');
        } else if (event.key === 'v'){
            document.body.classList.toggle('vermelho');
        }
    }

    window.addEventListener('keydown', hadleKeyboard);




    /***************************************
     *      FOR EACH E EVENTOS
     * 
     * o método addEventListener é adicionado á um único elemento,
     * então é necessário um loop entre elementos de uma lista, 
     * para adicionarmos à cada um deles
     * 
     */

    const imgs = document.querySelectorAll('img');

    function handleImg(event){
        console.log(event.target); 
        console.log(event.currentTarget); 
        console.log(event.currentTarget.getAttribute('src'));
    }

    imgs.forEach((img) => {
        img.addEventListener('click', handleImg);
    });