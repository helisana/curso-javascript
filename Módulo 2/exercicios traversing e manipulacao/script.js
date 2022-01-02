//duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

//selecione o primeiro DT  da DL de Faq
const dtFaq = document.querySelector('.faq-lista');

const primeiraDt = dtFaq.querySelector('dt');

//Selecione o DD referente ao primeiro DT
const proximoDD = primeiraDt.nextElementSibling;


//substitua o conteúdo html de .faq pelo .animais

const faq =  document.querySelector('.faq');

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
console.log(faq);