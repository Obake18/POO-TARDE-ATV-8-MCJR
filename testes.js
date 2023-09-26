
/*
 * Criação de instâncias da classe Produto
 */
const item1 = new Produto('Teclado', 130); // Cria um produto chamado "Teclado" com preço de 130 unidades monetárias.
const item2 = new Produto('Cutelo', 80);   // Cria um produto chamado "Cutelo" com preço de 80 unidades monetárias.
const item3 = new Produto('Forca', 20);    // Cria um produto chamado "Forca" com preço de 20 unidades monetárias.

/*
 * Criação de uma instância da classe CarrinhoDeCompras
 */
let cesta = new CarrinhoDeCompras(); // Inicializa um carrinho de compras vazio.

/*
 * Adição de produtos à cesta
 */
cesta.adicionarProduto(item1); // Adiciona o produto "Teclado" à cesta.
cesta.adicionarProduto(item2); // Adiciona o produto "Cutelo" à cesta.

/*
 * Exibição do estado atual da cesta no console
 */
console.log("Cesta de Compras:"); // Exibe um cabeçalho.
console.log(cesta); // Exibe o conteúdo da cesta no console.

/*
 * Cálculo do valor total da cesta e exibição no console
 */
console.log("Valor Total da Cesta:", cesta.calcularValorTotal()); // Calcula o valor total da cesta e o exibe no console.
