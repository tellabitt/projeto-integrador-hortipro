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

  login: async (req, res) => {
    const { email, senha, ativo, catalogo_oferta, termo_de_aceite } = req.body;

    const usuario = await UserService.getUserByLogin(
      email
    );

    if (usuario === null) {
      return res.json({ msg: 'Login ou Senha invalida(o)!' });
    } else {
      if (req.body.email == usuario.email & req.body.senha == usuario.senha) {
        return res.json({ msg: `Seja Bem Vindo ${usuario.email}` });
      }
      else {
        return res.json({ msg: 'Login ou Senha invalida(o)!' });
      }
    }


  },
};

module.exports = controller;
