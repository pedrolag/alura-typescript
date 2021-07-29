export function logTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-tempo-execucao.js.map