import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        // Tratar o campo "data": string -> date
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        // Tratar o campo "quantidade": string -> int
        const quantidade = parseInt(this.inputQuantidade.value);
        // Tratar o campo "valor": string -> float
        const valor = parseFloat(this.inputValor.value);
        // Gerar uma nova "negociacao"
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}
