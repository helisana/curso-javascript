//Retorne o url da página atual utilizando o objeto window
let url = document.URL;
console.log(url);
        // ou
let href = window.location.href;
console.log(href);

//Seleciona o primeiro elemento da página que possua a classe 'ativo'
const ativo = document.querySelector('.ativo');
console.log(ativo);

//Retorne a linguagem do navegador
const languageNavegador = window.navigator.language;
console.log(languageNavegador);

//Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);