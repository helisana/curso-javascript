/**************************
 *  NAVEGAÇÃO POR TABS
 * 
 * geralmente é uma navegação relacionada com uma lista de itens
 * e outra lista de itens.
 * A primeira é uma lista de navegação, e a outra lista ativa o item
 * 1:1 um item para cada conteudo da lista de conteudo 
 * 
 */

function initTabNav() {
   
   const tabMenu = document.querySelectorAll('.js-tabmenu li');
   const tabContent = document.querySelectorAll('.js-tabcontent section');
   tabContent[0].classList.add('ativo');

   if(tabMenu.length && tabContent.length) {
      function activeTab(index) {
         tabContent.forEach((section) => {
            section.classList.remove('ativo');
         });
      
         tabContent[index].classList.add('ativo');
      }
      
      tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener('click', () => {
            activeTab(index);
         })
      });
   }
} 

function initAccordion(){
   
   const accordionList = document.querySelectorAll('.js-accordion dt');
   const activeClass = 'ativo';

   if(accordionList.length){
         
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);

      function activeAcordion(){
         this.classList.toggle(activeClass);
         this.nextElementSibling.classList.toggle(activeClass);
      }

      accordionList.forEach((item) => {
         item.addEventListener('click', activeAcordion);
      });
   }
}


initTabNav();
initAccordion();