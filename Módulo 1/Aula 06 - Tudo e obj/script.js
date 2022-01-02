var nome = 'Heli';

nome.length; // tamanho
nome.charAt(1); //posição no vetor
nomeGemea = nome.replace('li', 'lo'); //helo
nome.repeat(3);
nomeMinusculo = nome.toLowerCase();
nomeMaiusculo = nome.toUpperCase();
nome;

var altura = 1.8;

altura.toString();
altura.toFixed();

//por um breve momento o numro é envolvido em um 
//objeto (coerção), tenco acesso assim as suas propriedades
//e metodos 

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//'function areaQuadrado(lado) {\r\n    return lado * lado;\r\n}'


//document

var btn = document.querySelector('.btn');

