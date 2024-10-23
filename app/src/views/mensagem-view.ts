import { View } from "./view.js";

export class MensagemView extends View<String>{

    /*
    * Repetindo Codigo - Devolvendo uma nova solução
    * Com Herança
    private element: HTMLElement;

    constructor(seletor: string){
        this.element = document.querySelector(seletor)
    }*/

    protected template(model:string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    /*
    * Repetindo Codigo - Devolvendo uma nova solução
    * Com Herança
    update(model: string): void {
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }*/
}