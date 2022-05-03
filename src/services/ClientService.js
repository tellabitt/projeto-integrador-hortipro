const Client = require("../database/models/Cliente");

const ClientService = {
  createClient: async (cpf, nome, sobrenome, telefone, celular) => {
    const newClient = await Client.create({
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
    });
    return newClient;
  },
};

module.exports = ClientService;
