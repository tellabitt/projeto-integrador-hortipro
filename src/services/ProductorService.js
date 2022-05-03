const Productor = require("../database/models/Produtor");

const ProductorService = {
  createProductor: async (
    cpf,
    nome,
    sobrenome,
    telefone,
    celular,
    id_endereco,
    rua
  ) => {
    const newProductor = await Productor.create({
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
      id_endereco,
      rua,
    });
    return newProductor;
  },
};

module.exports = ProductorService;
