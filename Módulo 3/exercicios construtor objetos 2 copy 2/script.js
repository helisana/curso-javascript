// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

    function Pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade
    }

    Pessoa.prototype.nomeCompleto = function () {
        return 'nome completo: ' + this.nome + ' ' + this.sobrenome;
    }

    const Alice = new Pessoa('Alice', 'Soraya', 14);
  
  // Liste os métodos acessados por 
  // dados criados com NodeList,
  // HTMLCollection, Document

  Object.getOwnPropertyNames(NodeList.prototype);
  Object.getOwnPropertyNames(HTMLCollection.prototype);
  Object.getOwnPropertyNames(Document.prototype);
  
  
  // Liste os construtores dos dados abaixoli.click(); // undefined
    const li = document.querySelector('li');
    
    li; // HTMLLIElement
    li.click; // Function
    li.innerText; // String
    li.value; // Number
    li.hidden; // Boolean
    li.offsetLeft; // Number
    li.click(); // undefined

  
  // Qual o construtor do dado abaixo:
   li.hidden.constructor.name;
   // String
  