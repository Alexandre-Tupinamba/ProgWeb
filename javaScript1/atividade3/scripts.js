function counter (valor) {
    let val = valor;
    return function incrementar() {
           val += 1;
           return val; 
        }    
}
const incrementar = counter(10);
console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());