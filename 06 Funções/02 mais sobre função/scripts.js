function multipolicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multipolicarTresNumeros(2,3,4));

const mult = multipolicarTresNumeros(5,4,8);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true){
        console.log("Pode Digigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(40,false));
console.log(podeDirigir(15,false));
