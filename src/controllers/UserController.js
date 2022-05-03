const UserService = require("../services/UserService");
const database = require("../database/models");

const controller = {
  create: async (req, res) => {
    const { email, senha, ativo, catalogo_oferta, termo_de_aceite } = req.body;

    const usuario = await UserService.createUser(
      email,
      senha,
      ativo,
      catalogo_oferta,
      termo_de_aceite
    );

    return res.json(usuario);
  },
};

module.exports = controller;
