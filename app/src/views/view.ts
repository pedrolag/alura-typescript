export abstract class View<T> {
    // elemento onde o HTML da view sera renderizado
    // "protected" -> Permite apenas a própria classe e suas filhas
    //                acessarem esta propriedade.
    protected elemento: HTMLElement;

    // Determina se é para remover qualquer tag <script> maliciosa de dentro do template
    protected escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Elemento "${seletor}" não encontrado.`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    // Retorna o HTML da view
    // "abstract" -> Força o programador a implementar um método "template"
    //               quando a classe for extendida.
    protected abstract template(model: T): string;

    // Renderiza o HTML da view
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}