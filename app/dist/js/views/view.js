export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Elemento "${seletor}" não encontrado.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map