import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        // Tratar o campo "data": string -> date
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        // Tratar o campo "quantidade": string -> int
        const quantidade = parseInt(this.inputQuantidade.value);
        // Tratar o campo "valor": string -> float
        const valor = parseFloat(this.inputValor.value);
        // Gerar uma nova "negociacao"
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        // Limpar os campos
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // Dar o foco para o campo "data"
        this.inputData.focus();
    }
}
