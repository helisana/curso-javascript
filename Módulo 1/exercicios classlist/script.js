//adicione a claasse ativo em todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

//remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
    console.log(item);
});
itensMenu[0].classList.add('ativo');

//verifique se as imagens possuem o atributo 'alt'

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo)
});

//modifique o href do link externo do menu

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com/');