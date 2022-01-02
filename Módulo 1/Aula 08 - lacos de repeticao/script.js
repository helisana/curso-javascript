var videoGames = ['switch', 'PS4', 'XBOX'];

videoGames.pop(); //remove o último item e retorna ele
videoGames.push('3DS');
videoGames.length;


//EXISTEM DIVERSOS MÉTODOS COMO MAP, REDUCE, FOREACH
 
for (let i = 0; i <= 10; i++) {
   // console.log(i);
}

var i = 0;

while ( i <= 10) {
    console.log(i);
    i++;
}




//for each 
//executa uma função para cada item da lista do array


var videoGames = ['switch', 'PS4', 'XBOX'];
videoGames.forEach(function(item, index) {
    console.log(item, IDBIndex);
});

//o argumento será atribuido dinamicamente