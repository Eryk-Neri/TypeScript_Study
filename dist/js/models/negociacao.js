export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    static criaDe(dataString, quantidadeString, ValorString) {
        const exp = /-/g;
        return new Negociacao(new Date(dataString.replace(exp, ',')), parseInt(quantidadeString), parseFloat(ValorString));
    }
}
