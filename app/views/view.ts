/* abstract class
*
*Não pode ser criar diretamente 
*
*Os metodos da class abstract só funciona
*nas classes filhas 
*
*/
export abstract class View<T>{//<T> - T -> É apelido podia ser D ou K
    //protected - só as classes filhas tem acesso  
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}