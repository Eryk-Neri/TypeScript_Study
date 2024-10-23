import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegocicoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#data')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegocicoesService();
    
    constructor(){
        /*this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;*/
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.DiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas dias úteis são aceitas");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao);
        this.limparForm();
        this.atualizaView();
    }

    public importaDados(): void{
        this.negociacaoService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
                });
            })
            .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private DiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay()<DiasDaSemana.SABADO;
    }

    private limparForm(): void{
        this.inputData.value ='' ;
        this.inputQuantidade.value ='' ;
        this.inputValor.value ='' ;
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso')
    }
}