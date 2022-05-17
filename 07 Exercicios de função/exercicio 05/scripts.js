function permicao(num) {
    if (num >= 18) {
        console.log("Você já pode realizar auto-escola");
    } else {
        console.log("Você não tem idade para fazer auto-escola");
    }
}

console.log(permicao(25));
console.log(permicao(15));