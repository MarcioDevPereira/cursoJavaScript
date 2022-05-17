/* Crie um array a partir de uma frase
imprima cada palavra do array no  console por meio de um For */

let frase = ("olá bom dia amigo");
const arrfrase = frase.split(" ");

for (let i = 0; i < arrfrase.length; i++) {
    console.log(arrfrase[i]);
}
