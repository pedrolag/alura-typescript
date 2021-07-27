import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;

        // Atualizar a view
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        // Criar um novo objeto negociacao
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        // Regra: Negociações podem ser feitas apenas em dias úteis
        if (!this.ehDiaUtil(negociacao.data)) {
            // Notifica o usuário
            this.mensagemView.update("As negociações podem ser feitas apenas em dias úteis.");
            
            return ;
        }

        // Adicionar a negociacao na lista de negociacoes
        this.negociacoes.adiciona(negociacao);
        
        // Limpar o formulario
        this.limparFormulario();
        
        // Atualizar toda a view
        this.atualizaView();
    
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
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