import { Imprimivel } from "../utils/imprimivel.js";


export class Negociacao extends Imprimivel {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
        // É necessário chamar o construtor da classe pai
        // quando se usa "extends"
        super();
    }

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
}