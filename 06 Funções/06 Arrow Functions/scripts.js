let consoleTeste = () => {
    console.log("Olá mundo!");
};

consoleTeste();

let soma = (a,b) => {
    return a + b;
};

console.log(soma(10,20));

const multplicarPorDois = (x) => {
    return x * 2;
//função arrow comum com return    
}

console.log(multplicarPorDois(2));

const multplicarPorDois2 = x => x * 2;
//função arrow simplificada
console.log(multplicarPorDois2(2));