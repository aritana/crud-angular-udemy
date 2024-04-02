export class Produto{
    _id?:number;
    nome: string;
    categoria: string;
    endereco: string;
    preco:number;

    constructor(nome: string, categoria:string, endereco:string, preco:number){
        this.nome = nome;
        this.categoria = categoria;
        this.endereco = endereco;
        this.preco = preco;
    }
}