export abstract class View<T> {
    // elemento onde o HTML da view sera renderizado
    // "protected" -> Permite apenas a própria classe e suas filhas
    //                acessarem esta propriedade.
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // Retorna o HTML da view
    // "abstract" -> Força o programador a implementar um método "template"
    //               quando a classe for extendida.
    abstract template(model: T): string;

    // Renderiza o HTML da view
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}