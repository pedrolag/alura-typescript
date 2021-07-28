import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController;
const form = document.querySelector('.form');
const btnImportar = document.querySelector('#btn-importar');

if (form === null) {
    throw Error("Formulário não encontrado.");
}

if (btnImportar === null) {
    throw Error("Botão \"Importar\" não encontrado.");
}

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

btnImportar.addEventListener('click', event => {
    controller.importarDados();
});