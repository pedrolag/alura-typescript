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
}
