
const iten = new Produto ('Teclado', 130)
const iten2 = new Produto ('Cutelo', 80)
const iten3 = new Produto ('Forca', 20)


let cesta = new CarrinhoDeCompras ()


cesta.adicionarProduto(iten);
cesta.adicionarProduto(iten2);

console.log(cesta);
console.log(cesta.calcularValorTotal);