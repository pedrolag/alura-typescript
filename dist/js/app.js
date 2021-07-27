import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController;
const form = document.querySelector('.form');

form.addEventListener('submit', event => {

    // Evita o comportamento padrão do submit
    event.preventDefault();

    // Chama a função "adiciona" da controller
    controller.adiciona();
    
});
