// transforme o objeto em um construtor fuction

const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
   this.andar = function () {
        console.log(this.nome + ' andou');
    }

}

// Crie 3 pessoas (Joao 20 anos, Maria 25 anos, Bruno 15 anos)

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

//Crie um construtor Function (Dom) para a manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
/*
1. Elements, retorna nodeList com os elementos selecionados
2. addClass(classes), adiciona a classe a todos os elementos
3. removeClasse de todos os elementos

*/

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.addClass = function(classe) {
        elementList.forEach((element) =>{
            element.classList.add(classe);
        })
    }
    this.elements = elementList;
    this.removeClass = function(classe) {
        elementList.forEach((element) =>{
            element.classList.remove(classe);
        })
    }
}

const listaItens = new Dom('li');
listaItens.addClass('ativo');
listaItens.removeClass('ativo');