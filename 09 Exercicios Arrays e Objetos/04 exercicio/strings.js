/* Adicione a propriedade janelas no ônibus, com o valor de 20
delete a propriedade rodas
imprima a propriedade janelas no console */

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2

}

delete onibus.rodas;
console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);

