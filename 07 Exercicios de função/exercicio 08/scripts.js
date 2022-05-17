function tamanhoDoTexto(texto) {
    if (texto.length > 10) { //length para fazer a contagem de caracteries
        console.log("Testo muito longo!");
    } else {
        console.log("Tamanho de texto permitido");
    } 
    console.log(texto.length);
}

tamanhoDoTexto("normal");
tamanhoDoTexto("texto muito grande");
tamanhoDoTexto("10");
