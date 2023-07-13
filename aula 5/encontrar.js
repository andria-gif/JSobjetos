const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
return lista.find((intem) => intem[chave] .includes(valor));
}

const encontrado = encontrar (clientes, "nome", "Kirby");
console.log(encontrado);

const encontado2 = encontrar (clientes, "teledone", "51993301028");
console.log(encontado2);