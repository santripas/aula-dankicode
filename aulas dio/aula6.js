

/* ===========================  ARRAY ===============================


class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

======================================================================*/

const notas = [];
console.log('Passou por aqui!');

notas.push(5);
notas.push(10);
notas.push(10);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
} 
    const media = soma / notas.length;
    console.log(media);









/*================================  FOR ==============================================

const nome = 'Sandro';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);    
}

==============================================================================================









==============================================================================================
{} - Bloco de código ou objeto literal
[] - Lista
==============================================================================================*/

