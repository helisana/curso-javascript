
//objetos

var pessoa = {
    nome: 'Ana',
    idade: 24,
    profissao: 'enfermeira',
    ensinoSuperior: false
}

pessoa.nome;
pessoa.ensinoSuperior;

//metodos
//é uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado
    },
    cinco() {
        return 5;
    }
}

 console.log(quadrado.lados);
 console.log(quadrado.area(5));
 console.log(quadrado.perimetro(5));