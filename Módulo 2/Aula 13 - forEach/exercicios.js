//retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

// retorne no console apenas as imagens que começaram com a palavra imagem
//const imagensSelecionadas = document.querySelectorAll(' ');

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//selecione todos os links internos, onde href começa com #

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);


//selecione o primeiro h2 dentro de .animais-descrição

const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);
 
// selecione o ultimo p do site

const P = document.querySelectorAll('p');
const ultimoP = P[P.length - 1]
console.log(ultimoP);