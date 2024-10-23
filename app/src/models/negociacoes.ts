
import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
   
    /*
    *  Negociacao[] - Atalho do TypeScript 
    *  É a mesma coisa do que 
    *  Array<Negociacao>
    */
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    /*
    *  readonly Negociacao[]Negociacao[] - Atalho do TypeScript 
    *  É a mesma coisa do que 
    *  ReadonlyArray<Negociacao>
    */
    //lista(): ReadonlyArray<Negociacao>{
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    /**
     * paraTexto
     */
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes,null,2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes)
    }
}