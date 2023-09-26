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

    /**
     * Calcula o valor total dos produtos no carrinho.
     * @returns {number} O valor total calculado.
     */
    calcularValorTotal() {
        let valorTotal = 0;
        for (let i = 0; i < this.listaDeCompras.length; i++) {
            valorTotal += this.listaDeCompras[i]._precoUnitario; 
            
            /**
             * Adicione o preço do produto ao total */
        } 
        return valorTotal;
    }
}
/**
 * Classe que representa um cardápio de comidas.
 */
class Cardapio {
    /**
     * Cria uma instância de Cardapio.
     * @constructor
     */
    constructor() {
        /**
         * Lista de comidas disponíveis no cardápio.
         * @type {Array}
         */
        this.listaDeComidas = [];
    }

    /**
     * Adiciona uma comida ao cardápio.
     * @param {object} comida - Objeto que representa uma comida a ser adicionada.
     * @param {number} comida.codigo - O código identificador da comida.
     * @param {string} comida.nome - O nome da comida.
     * @param {number} comida.preco - O preço da comida.
     */
    adicionarComidas(comida) {
        this.listaDeComidas.push(comida);
    }

    /**
     * Remove uma comida do cardápio com base no código.
     * @param {number} codigo - O código identificador da comida a ser removida.
     */
    removerComidas(codigo) {
        for (let i = 0; i < this.listaDeComidas.length; i++) {
            if (this.listaDeComidas[i].codigo === codigo) {
                this.listaDeComidas.splice(i, 1);
                return; // Encerra o loop após encontrar e remover a comida.
                alert ('Encontrado!')
            }
        }
    }
}
