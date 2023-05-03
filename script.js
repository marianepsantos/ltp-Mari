class Produto {
   constructor (nome, datadecadastro, descricao, preco){
   this.nome = nome;
   this.datadecadastro = datadecadastro;
   this.descriçao = descricao;
   this.preco = preco;
   }
   
   mostrardados(){
    return `
     <div${this.nome}></div>
     <div${this.datadecadastro}></div>
     <div${this.descricao}></div>
     <div${this.preco}></div>
    `;

  }
  
}
   class ProdutoDestaque extends Produto {
   constructor (nome, datadecadastro, descricao, preco, produtoDestaque ){
     super(nome, datadecadastro, inscricao, preco);
     this.produtoDestaque = produtoDestaque;
   }

   mostrarProdutoemDestaque(){
    return `
    <div${this.nome}></div>
    <div${this.datadecadastro}></div>
    <div${this.descricao}></div>
    <div${this.preco}></div>
   `;
   ///return this.nome + this.datadecadastro + this.descricao + this.preco + this.produtoDestaque ;
   }
}

const produto = new Produto("laptop", "03/05/2023", "001", "5000"); 
console.log(produto.mostrardados_())

const div = document.getElementById("ProdutoemDestaque")















