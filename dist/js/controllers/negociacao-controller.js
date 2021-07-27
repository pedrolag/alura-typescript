import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        // Buscar os valores inseridos pelo usuario
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // Atualizar a view
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        // Criar um novo objeto negociacao
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        // Regra: Negociações podem ser feitas apenas em dias úteis
        if (!this.ehDiaUtil(negociacao.data)) {
            // Notifica o usuário
            this.mensagemView.update("As negociações podem ser feitas apenas em dias úteis.");
            return;
        }
        // Adicionar a negociacao na lista de negociacoes
        this.negociacoes.adiciona(negociacao);
        // Limpar o formulario
        this.limparFormulario();
        // Atualizar toda a view
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        // Limpar os campos
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // Dar o foco para o campo "data"
        this.inputData.focus();
    }
    atualizaView() {
        // Atualizar a view com a lista de negociacoes atualizada
        this.negociacoesView.update(this.negociacoes);
        // Notifica o usuário
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
