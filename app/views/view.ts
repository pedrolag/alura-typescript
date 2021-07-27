export class View<T> {
    // elemento onde o HTML da view sera renderizado
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // Retorna o HTML da view
    template(model: T): string {
        throw Error("Classe filha precisa implementar o método \"template\".");
    }

    // Renderiza o HTML da view
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}