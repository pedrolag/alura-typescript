export function logTempoExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // Salva o método que está chamando o decorator
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            // Tempo de inicio
            const t1 = performance.now();

            // Chama o método original passando os arrgumentos que existem
            // na chamada do método
            const retorno = metodoOriginal.apply(this, args);

            // Tempo de finalização
            const t2 = performance.now();

            // Mostra a diferença do tempo
            console.log(`Método "${propertyKey}": tempo de execução: ${(t2 - t1)}ms`);

            // Chama o retorno do método original
            return retorno;
        };

        return descriptor;
    }
}