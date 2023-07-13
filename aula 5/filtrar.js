const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento (clientes){
return clientes.filter((cliente) => {
          return (cliente.edereco.apartamento &&
                  !cliente.edereco.hasOwnProperty("complemento")  ///hasOwnProperty = 
                  ///função para verificar se tal metado tem tal propriedade != serve p negar
                    );
});
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);