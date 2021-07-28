import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacao implements Imprimivel {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get data(): Date {
        // Desta forma não é possível alterar a propriedade data
        // através de negociacao.data.setDate()
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public static criaDe(
        dataString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        // Tratar o campo "data": string -> date
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        
        // Tratar o campo "quantidade": string -> int
        const quantidade = parseInt(quantidadeString);

        // Tratar o campo "valor": string -> float
        const valor = parseFloat(valorString);

        // Gerar uma nova "negociacao"
        return new Negociacao(
            date,
            quantidade,
            valor,
        ); 
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}