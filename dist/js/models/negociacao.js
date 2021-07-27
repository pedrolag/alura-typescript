export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // Desta forma não é possível alterar a propriedade data
        // através de negociacao.data.setDate()
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        // Tratar o campo "data": string -> date
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        // Tratar o campo "quantidade": string -> int
        const quantidade = parseInt(quantidadeString);
        // Tratar o campo "valor": string -> float
        const valor = parseFloat(valorString);
        // Gerar uma nova "negociacao"
        return new Negociacao(date, quantidade, valor);
    }
}
