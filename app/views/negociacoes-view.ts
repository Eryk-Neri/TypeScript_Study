import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

    /* Repetindo Codigo - Devolvendo uma nova solução
    * Com Herança
    *
    private elemento: HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }*/

    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUATIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data:Date): String {
        return new Intl.DateTimeFormat().format(data)
    }

    /*
    * Repetindo Codigo - Devolvendo uma nova solução
    * Com Herança
    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model)
    }*/
}
