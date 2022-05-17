let carro = {
    modelo: 'Corsa',
    //chave da propriedade || valor da propriedade
    porta: 4,
    motor: 1.0,
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);
//assign é utilizado para copiar novas propriedades
console.log(carro);

console.log(Object.keys(carro));
//apresentar apenas as chaves da propriedade
