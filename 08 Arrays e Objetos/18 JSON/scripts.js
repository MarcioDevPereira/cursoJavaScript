let pessoa = {
    "nome" : "Marcio",
    "idade" : 30,
    "profissão" : "Desenvolvedor",
    "linguagens" : ["HTML", "JavaScript", "CSS"]
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissão);
console.log(pessoa.linguagens);

//utilizado para comunicação entre serviços ex. back-end <-> front-end
//tipo de dado padronizado
//JavaScript Object Notation

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
//transforma JSON em string

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
//transforma a string de volta a JSON
