function areaQuadrado(lado) {
    var area = lado * lado;
    console.log(area);
    return area;
}

areaQuadrado(4) //16
areaQuadrado(5) //25
areaQuadrado(2) //4

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log('total = ', total);

// PARAMETROS E ARGUMENTOS

//Ao criar uma função, podemos definir os parâmetros
//Ao executar uma função, você pode passar os argumentos

//peso e altura são os parâmetros
function imc (peso, altura) {
    const imc = peso / (altura **2);
    return imc
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
imc(60, 1.70); //60 e 1.70 são os argumentos


function corFavorita(cor) {
    if(cor === 'azul') {
        return "menino";

    } else if (cor === 'rosa'){
        return 'menina';

    } else {
        return 'Não definiu';
    }

}


addEventListener('click', function() { console.log('oi')});    

    //exercicios

//1. crie uma função que verifique se um valor é verdadeiro
var valor = 3;

function verificar(valor) {    
    return !valor;
}

console.log(verificar());


//2. crie uma função que calcule o perímetro de um quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}


//3. crie uma função que retorne seu nome completo, 
//deve possuir nome e sobrenome como parametro

function nomeCompleto (nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

//4. criar uma função para verificar se um num é par

function verificarPar(num) {
    var modulo = num % 2;

    if(modulo === 0) {
        return true;
    } else {
        return false
    }
    
}

//5. verificar o tipo de dado

function tipoDado(dado) {
    return typeof dado;
}

//6. addEventListener é uma função nativa do JS
//o primeiro parâmetro é o evento que ocorro e o segundo é 
//o Callback. Utilize essa função para mostrar no console o seu nome completo
//quando o evento scroll ocorrer

addEventListener('scroll', function(){
    console.log('Helisana');
})

//7. Corrija o erro a baixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return 'Ainda Faltam ' + (totalPaises - paisesVisitados) + ' para visitar';
}

function jaVisitei(paisesVisitados) {
    return 'Já visitei ' + paisesVisitados + ' do total de ' + totalPaises + ' paises';
}

precisoVisitar(20);
jaVisitei(20);

