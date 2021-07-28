import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    })
}