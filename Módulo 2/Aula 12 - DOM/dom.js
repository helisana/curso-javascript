/*
    DOM = Document Object Model

    interface que representa documentos HTML e XML através de objetos. Com ela é possivel
    manipular a estrutura, estilo e conteúdo desses documentos

    f = métodos

*/


//window.alert();
const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/Aula%2012%20-%20DOM/index.html') {
    console.log('é igual!');
}

console.log(window);
//WINDOW é o obj global do browser
//possui diferentes métodos e propriedades

window.innerHeight;
//retorna a altura do browser

//Ao inspecionar o elemento, você está vendo a
//representação oficial do DOM


/**************************/

let titulo = document.querySelector('h1');
console.log(titulo);

let body = document.body;

// NODE

/*
    Toda tag html é representada pelo objeto Element e 
    por isso herda os seus métodos e propriedades.
    Element é um tipo de objeto Node
*/

titulo.classList;
titulo.classList[0];

titulo.innerText; //retorna o texto
titulo.classList; //retorna as classes
titulo.id; //retorna o ID
titulo.offsetHeight; //retorna a altura do elemento

titulo.addEventListener('click', callback);
//ativa a função callback ao clicar no titulo

function callback() {
    console.log('clicou em ', titulo.innerText);
}

