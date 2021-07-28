import { inspect } from "../decorators/inspect.js";
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { Imprimivel } from "../interfaces/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
    // Lista de negociacoes
    private negociacoes: Negociacao[] = [];

    // Adicionar uma nova negociacao na lista de negociacoes
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes);
    }

    // Imprimir a lista de negociacoes
    // "readonly" -> não permite a edição da lista
    @inspect()
    @logTempoExecucao()
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}