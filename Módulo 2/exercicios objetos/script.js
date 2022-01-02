//Crie um obj com os seus dados pessoais
//Deve possuir pelo menos duas propriedades, nome e sobrenome

pessoa = {
    nome: 'Helisana',
    sobrenome: 'dos Santos Lula',
    idade: 24,
    cidade: 'Curitiba',
    sexo: 'feminino',

    nomeCompleto() {
        return this.nome + ' ' +  this.sobrenome;
    }
}


//Crie um método no objeto anterior, que mostre o seu nome completo

    pessoa.nomeCompletoOutroJeito = function() {
        return this.nome + ' ' +  this.sobrenome;
    }

console.log(pessoa.nomeCompleto());
//modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

console.log(carro.preco = '3000');

//Crie um objeto de um cachorro que represente um labrados,
//preto com 10 anos que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    idade: 10,
    cor: 'preto',
    porte: 'grande',
    latir(pessoa){
        if(pessoa === 'masculino') {
            return 'Au au au'
        } else {
            return 'nada';
        }
    }
}