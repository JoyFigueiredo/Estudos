/*
//declaraçao de variavel e constantes
let mensagem = 'Ola mundo'; //const, var... define o tipo da variavel automaticamente
console.log(mensagem);
mensagem = 'Oi';
console.log(typeof(mensagem));
*/
/*
//Função

function somar(numA, numB){ 
    return numA + numB;
}

let resultado = somar(10, 3);
console.log(resultado);

let somar = function (numA, numB) { 
    return numA + numB;
}

let resultado = somar(10, 3);
console.log(resultado);

let somar = (numA, numB) => { 
    return numA + numB;
}

let resultado = somar(10, 3);
console.log(resultado);
*/

//Vetores 
/*
let finaldesemana = new Array('sabado','doomingo');
console.log(finaldesemana[1]);

let finaldesemana = ['sabado','doomingo'];
console.log(finaldesemana[1]);
finaldesemana.push('sexta-feira');
console.dir(finaldesemana);

*/


//Objetos
/*
let agenda = {
    nome: 'Joice',
    sobrenome: 'Figueiredo',
    idade: '26',
    nomeCompleto: function(){
        return this.nome + this.sobrenome;
    }
}
console.dir(agenda);
console.log(agenda.nome);
console.log(agenda.nomeCompleto());
*/

//Condicional
/*
let idade = 17

if(idade>= 18){
    console.log('Voce é maior de idade');
}else{
    console.log('Voce é menor de idade');
}
*/
//Loops
/*
let finaldesemana = new Array('sabado','doomingo');
finaldesemana.forEach(function(dia){
    console.log('Final de semana: '+ dia);
})

for(let dia of finaldesemana){
    console.log(dia);
}
*/