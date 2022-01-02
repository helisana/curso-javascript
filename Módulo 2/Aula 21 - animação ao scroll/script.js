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

function initScrollSuave(){
   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

   function scrollSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const topo = section.offsetTop;

      section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })

      /* forma alternativa
      
      window.scrollTo({
         top: topo,
         behavior: 'smooth' //comportamento
      });
      
      */


   }

   linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSection);
   });
}

function initAnimacaoScroll() {
   const sections = document.querySelectorAll('.js-scroll');
   
   if(sections.length){
   
      const windowMetade = window.innerHeight * 0.6;
      
      function animaScroll() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible){
               section.classList.add('ativo');
            } else {
               section.classList.remove('ativo');
            }
      
         });
      }
      animaScroll();
      window.addEventListener('scroll', animaScroll);
      
   }

}


initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();