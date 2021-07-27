import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // Lista de negociacoes
    private negociacoes: Negociacao[] = [];

    // Adicionar uma nova negociacao na lista de negociacoes
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // Imprimir a lista de negociacoes
    // "readonly" -> não permite a edição da lista
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
// negociacoes.adiciona()