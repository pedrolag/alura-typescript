import { inspect } from "../decorators/inspect.js";
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // Lista de negociacoes
    private negociacoes: Negociacao[] = [];

    // Adicionar uma nova negociacao na lista de negociacoes
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // Imprimir a lista de negociacoes
    // "readonly" -> não permite a edição da lista
    @inspect()
    @logTempoExecucao()
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}