export function domInjector(seletor: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        let elemento: HTMLElement;
        const getter = function () {
            // Salva o elemento buscado no dom em uma especie de "cache"
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }

        // Sobrescreve as propriedades da classe "negociacao-controller"
        // em funções (função "getter" declarada acima) que retornam
        // um elemento do dom pelo id
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}