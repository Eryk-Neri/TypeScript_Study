export function escape(
    target: any,
    propertyKey: String,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any []){
        let retorno = metodoOriginal.apply(this,args);
        if(typeof retorno === 'string'){
            //console.log(`@escape em ação na classe ${this.constructor.name} para método ${propertyKey}`)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        return retorno
    }
}