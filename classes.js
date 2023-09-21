/**
 * Representa um produto em um carrinho de compras.
 * @class
 */
class Produto {
    /**
     * Cria uma instância de Produto.
     * @constructor
     * @param {string} descricao - A descrição do produto.
     * @param {number} precoUnitario - O preço unitário do produto.
     */
    constructor(descricao, precoUnitario) {
        this.descricao = descricao;
        this._precoUnitario = precoUnitario;
    }
}

/**
 * Representa um carrinho de compras que contém uma lista de produtos.
 * @class
 */
class CarrinhoDeCompras {
    /**
     * Cria uma instância de CarrinhoDeCompras.
     * @constructor
     */
    constructor() {
        /**
         * Lista de produtos no carrinho de compras.
         * @type {Produto[]}
         */
        this.listaDeCompras = [];
    }

    /**
     * Adiciona um produto à lista de compras do carrinho.
     * @param {Produto} produto - O produto a ser adicionado.
     */
    adicionarProduto(produto) {
        this.listaDeCompras.push(produto);
    }
}

