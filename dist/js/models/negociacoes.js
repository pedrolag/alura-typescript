export class Negociacoes {
    constructor() {
        // Lista de negociacoes
        this.negociacoes = [];
    }
    // Adicionar uma nova negociacao na lista de negociacoes
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Imprimir a lista de negociacoes
    // "readonly" -> não permite a edição da lista
    lista() {
        return this.negociacoes;
    }
}
