let pessoa = {
    nome: 'Marcio',
    idade: 30,
    profissao: "programador",
}

console.log(pessoa.nome);
delete pessoa.nome; //apagando uma propriedade

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casada = true; //adicionando uma propriedade
console.log(pessoa.casada);

console.log(pessoa);