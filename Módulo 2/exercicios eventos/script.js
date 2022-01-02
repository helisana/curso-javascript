/*  quando o usuário clicar nos links internos do site,
*  adicione a classe ativo ao item clicanco e remova dos
* demais itens caso eles possuam a mesma. Previna o 
* comportamento padrão desses links 
*/

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();

    links.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
    console.log(event);
}

links.forEach((link) => {
    link.addEventListener('click', handleLink);
});

/**
 * Selecione todos os elementos do site começando a partir do body,
 * ao clique mostre exatamente quais elementso estão sendo clicados * 
 */

    const elementos = document.querySelectorAll('body *');
    console.log(elementos)

    function handleElement(event) {
        console.log(event.currentTarget);
    }

    elementos.forEach(elemento => {
        elemento.addEventListener('click', handleElement);
    });

/**
 * Utilizando o código anterior, ao invés de mostrar no console,
 * remova o elemento que está sendo clicado, o método remove() remove um elemento 
 */

        function removeElement(event) {
            event.target.remove();
        }

        elementos.forEach(elemento => {
            elemento.addEventListener('click', removeElement);
        });

/**
 * Se o usuário clica na tecla (t), aumente todo o texto do site
 */

       function handleClickT(event) {
           console.log(event.key);

           if(event.key === 't') {
                console.log('Clicou no "t"');
                document.documentElement.classList.add('texto-maior');
           }
       }

       window.addEventListener('keydown', handleClickT);