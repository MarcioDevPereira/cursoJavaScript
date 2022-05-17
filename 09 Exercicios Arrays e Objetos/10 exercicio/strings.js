/* Crie uma Calculadora */

const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(5,3));
console.log(calculadora.subtrair(7,3));
console.log(calculadora.multiplicar(5,2));
console.log(calculadora.dividir(20, 2));