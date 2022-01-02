
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(cor, marca, portas);
}

//console.log(var, marca, portas);  var é o tipo da variavel
//console.log(cor, marca, portas); //marca e portas estão fora do escopo


//como corrigir o erro a baixo 

const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

somarDois(4);
dividirDois(6);

//o que fazer para total retornar 500

const num = 50;

for (let num = 0; num < 10; num++){
    console.log(num);
}

const total = 10 * num;
console.log(total);