function numeroAleatorio (num){
    return Math.floor(Math.random() * num) +1;
    //Math.floor para arredondar os numeros e +1 para arredondar para cima
}

console.log(numeroAleatorio(9));
console.log(numeroAleatorio(17));
console.log(numeroAleatorio(60));
console.log(numeroAleatorio(90));
 //numero entre parenteses é o numero maximo permitido