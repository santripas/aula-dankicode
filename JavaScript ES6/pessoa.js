class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
}	

class outraClasse{
    constructor(){
        alert('outra classe!');
    }
}