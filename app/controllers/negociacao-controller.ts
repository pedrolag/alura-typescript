import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // Buscar os valores inseridos pelo usuario
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');

        // Atualizar a view
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        // Criar um novo objeto negociacao
        const negociacao = this.criaNegociacao();

        // Regra: Negociações podem ser feitas apenas em dias úteis
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            // Adicionar a negociacao na lista de negociacoes
            this.negociacoes.adiciona(negociacao);
            
            // Limpar o formulario
            this.limparFormulario();
            
            // Atualizar toda a view
            this.atualizaView();
        } else {
            // Notifica o usuário
            this.mensagemView.update("As negociações podem ser feitas apenas em dias úteis.")
        }
    
    }
        
    private criaNegociacao(): Negociacao {
        // Tratar o campo "data": string -> date
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        
        // Tratar o campo "quantidade": string -> int
        const quantidade = parseInt(this.inputQuantidade.value);

        // Tratar o campo "valor": string -> float
        const valor = parseFloat(this.inputValor.value);

        // Gerar uma nova "negociacao"
        return new Negociacao(
            date,
            quantidade,
            valor,
        ); 
    }

    private limparFormulario(): void {
        // Limpar os campos
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        // Dar o foco para o campo "data"
        this.inputData.focus();
    }

    private atualizaView(): void {
        // Atualizar a view com a lista de negociacoes atualizada
        this.negociacoesView.update(this.negociacoes);

        // Notifica o usuário
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}