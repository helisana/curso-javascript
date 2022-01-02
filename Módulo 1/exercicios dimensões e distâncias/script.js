//verifique a distância da primeira imagem em relação ao topo da página


const img = document.querySelector('img');
console.log(img.offsetTop);

//retorne a soma da largura de todas as imagens

function somaImgs() {
    const imgs = document.querySelectorAll('img');

    let soma = 0;

    imgs.forEach((img) => {
        soma = soma + img.offsetWidth;
        console.log('largura: ' , img.offsetWidth);
    });

    console.log(soma);

}

//verifique se os links da página possuem o mín recomendavedo para telas
//utilizadas com o dedo (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log('Conforme recomendado');
    } else {
        console.log('Menor que 48, precisa ajustar');
    }
    
})


//se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');

if(window.innerWidth < 720) {
    menu.classList.add('menu-mobile');
}

console.log(window.innerWidth);


const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if( browserSmall) {
    menu.classList.add('menu-mobile');
}





window.onload = function() {
    somaImgs();
}