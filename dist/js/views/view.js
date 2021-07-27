export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // Renderiza o HTML da view
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
