  /***************************
   *    NATIVE :
   * objetos nativos são aqueles definidos na espeificação da linguagem e 
   * são implementados independente do Host;
   * 
   */

  //Construtores de objetos nativos

//   Object;
//   String;
//   Array;
//   function;
//    Number;

/****************************
 *  User
 * 
 * objetos do user, são os objetos definidos pelo seu aplicativo, ou seja
 * qualquer objeto que você cria ou que importar de alguma biblioteca externa.
 * 
    const Pessoa = {
    nome: 'André';
    }

 * 
 */

/************************************
 
Diferentes Versões

    Browsers diferentes
    Apesar de tentarem ao máximo manter um padrão, browsers diferentes
    possuem objetos com propriedades e métodos diferentes.
    Versões de browsers
    Sempre que o browser é atualizado, novos objetos, métodos e propriedades
    podem ser implementados.
    Host e Native Objects
    Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6),
    não possuem o método  
*/

/**************************************
     * Versões de JavaScript
    
    ECMA
    Organização responsável por definir padrões para tecnologia. ECMAScript é 
    o padrão javascript.

    ECMAScript 2015 ou ES6
    ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript,
    que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da
    ES6, existe uma tendência anual de atualizações. ECMAScript 2015, 2016,
    2017, 2018 e Next.

    Engine
    Existem diversas engines que implementam o ECMAScript como V8,
    SpiderMonkey, Chakra, JavaScriptCore e mais.

 */

/*******************************
     * Bibliotecas
    Bibliotecas como jQuery foram criadas para resolver o problema de
    inconsistências entre browsers e adicionar funcionalidades que
    não existiam nativamente. A padronização dos browsers e a
    implementação de soluções nativas, torna as mesmas obsoletas.
 */

    $('a').addClass('ativo');
    $('a').hide();
    $('a').show();


    /*******************************
     * Verificar se existe
     * 
     * O typeof retorna o tipo de dado. Caso esse dado não exista ou não
        tenha sido definido, ele irpa retornar undefined. Ou seja, quando não for
        undefined quer dizer que existe.
     */

        if (typeof Array.from !== "undefined"){
            console.log('existe');
        }
        if (typeof NodeList !== "undefined") {
            console.log()
        }


/********************************
 * 
 *          API
* 
*    Application Programming Interface, é uma interface de
*    software criada para a interação com outros softwares.
*    Ou seja, toda interação que fazemos com o browser
*    utilizando Objetos, Métodos e Propriedades, estamos na
*   verdade interagindo com a API do browser.
 */


/************************
 * Objetos do browser
 * 
 * Window;
 * history
 * document 
 * htmlColletion
 * NodeList
 */


