export class View {
    constructor(seletor, escapar) {
        // Determina se é para remover qualquer tag <script> maliciosa de dentro do template
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        // this.escapar = escapar ? escapar : false;
        if (escapar) {
            this.escapar = escapar;
        }
    }
    // Renderiza o HTML da view
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
