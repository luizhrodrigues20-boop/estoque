/*
  Atividade: Lista de produtos de uma loja
  Objetivo: Cadastrar, verificar e filtrar produtos.
*/

// Criando um array com 10 produtos iniciais
let produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Impressora",
    "Webcam",
    "Fone",
    "Gabinete",
    "Microfone",
    "Carregador"
];

// Exibindo a lista original de produtos
console.log("Lista original de produtos:");
console.log(produtos);

// Utilizando push() para cadastrar novos produtos
produtos.push("Tablet");
produtos.push("Pendrive");

// Exibindo a lista após cadastrar novos produtos
console.log("Lista após novos cadastros:");
console.log(produtos);

// Utilizando includes() para verificar se um produto existe
let produtoProcurado = "Notebook";

if (produtos.includes(produtoProcurado)) {
    console.log("O produto " + produtoProcurado + " está cadastrado!");
} else {
    console.log("O produto " + produtoProcurado + " não está cadastrado!");
}

// Verificando um produto que não existe na lista
let outroProduto = "Videogame";

if (produtos.includes(outroProduto)) {
    console.log("O produto " + outroProduto + " está cadastrado!");
} else {
    console.log("O produto " + outroProduto + " não está cadastrado!");
}

// Utilizando filter() para criar uma lista
// apenas com produtos que possuem mais de 5 letras
let produtosFiltrados = produtos.filter(function(produto) {
    return produto.length > 5;
});

// Exibindo o array original e o array filtrado
console.log("Array original de produtos:");
console.log(produtos);

console.log("Array filtrado (nomes com mais de 5 letras):");
console.log(produtosFiltrados);