function counter (a) {
        let secret = a;
        return function incrementar() {
            secret++
            return secret
        };  
};

const incrementar = counter(10);
console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());
