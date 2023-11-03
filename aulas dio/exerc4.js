// 1 - Crie um programa que dado um número imprima a sua tabuada.
/*
const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);

}

//2 - Crie um  programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 1; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0){
        console.log(numero);
    }
    
}
*/

    const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);