class Venda {
    id;
    quantidade;
    preco;
    constructor (id1, quantidade1, preco1) {
        this.id = id1;
        this.quantidade = quantidade1;
        this.preco = preco1;
    }

    setId(valor){
        this.id = valor;
    }
    setQuantidade(valor){
        this.quantidade = valor;
    }
    setPreco(valor){
        this.preco = valor;
    }

    getId(){
        return this.id ;
    }
    getQuantidade(){
        return this.quantidade;
    }
    getPreco(){
        return this.preco;
    }

    getValorTotal(){
        return this.quantidade * this.preco;
    }
        
}

prod1 = new Venda(13, 545, 50);
prod2 = new Venda(30, 05, 54);

console.log(prod1);
console.log(prod2);

console.log(prod1.getValorTotal());
console.log(prod2.getValorTotal());