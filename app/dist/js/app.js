import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController;
const form = document.querySelector('.form');
if (form === null) {
    throw Error("Formulário não encontrado.");
}
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
