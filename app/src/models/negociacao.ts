/*export class Negociacao {
    """EM OUTRAS LINGUAGENS SERIA ASSIM:
    
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }"""

    """MAS AQUI É TYPESCRIPT NA VEIA!!!"""
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}
        

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}*/

import { Modelo } from "../interfaces/Modelo.js";

/*
* public readonly
* todo mundo tem acesso
* mas ninguém pode atribuir um valor a propriedade
*/
export class Negociacao implements Modelo<Negociacao>{
    constructor(
        //public readonly data: Date, 
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {
       // super(); //-> chamando o construtor pai
    }
    
     /*
    * static -> eu posso chamar o metodo diretamente da class
    *   não precisa chamar a class e depois o metodo
    * 
    * ex.:
    *       S/static : "const x = new Negociacao(null,0,0).criaDe()"
    *       C/stattic: "constx = Negociacao.criaDe()" 
    * 
    * */
    public static criaDe(dataString: string, quantidadeString: string, ValorString: string){
        const exp = /-/g;
        return new Negociacao(
            new Date(dataString.replace(exp,',')),
            parseInt(quantidadeString),
            parseFloat(ValorString)
        );
    }

    
    get volume(): number {
        return this.quantidade * this.valor;
    }
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    
    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}`;
    }

    public ehIgual(negociacao:Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth() 
            && this.data.getFullYear() === negociacao.data.getFullYear() 
    }
}