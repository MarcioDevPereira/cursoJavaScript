let n = 10;
//variavel global
function imprimir() {
    let n = 150
//A variavel da função escopo não altera o da variavel global
    console.log(n);
}

imprimir(); //imprimi 150
console.log(n); //imprimi 10