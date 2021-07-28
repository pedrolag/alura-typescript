import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    })
}