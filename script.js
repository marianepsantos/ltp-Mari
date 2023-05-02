class Produto {
   constructor (nome, datadecadastro, inscricao, preco){
   this.nome = nome;
   this.datadecadastro = datadevadastro;
   this.descriçao = descricao;
   this.preco = preco;
   }
   
   mostrardados(){
   return this.nome + this.datadecadastro + this.descriçao + this.preco;
  }
  
}
   class ProdutoDestaque extends Produto {
   constructor (nome, datadecadastro, descricao, preco, produtoDestaque ){
     super(nome, datadecadastro, inscricao, preco);
     this.produtoDestaque = produtoDestaque;
   }

   mostrarProdutoemDestaque(){
   return this.nome + this.datadecadastro + this.descricao + this.preco + this.produtoDestaque ;
   }
}