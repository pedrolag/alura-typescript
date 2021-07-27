export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // Retorna o HTML da view
    template(model) {
        throw Error("Classe filha precisa implementar o método \"template\".");
    }
    // Renderiza o HTML da view
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
