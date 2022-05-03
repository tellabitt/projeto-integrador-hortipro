const User = require("../database/models/Usuario");

const UserService = {
  createUser: async (email, senha, ativo, catalogo_oferta, termo_de_aceite) => {
    const newUser = await User.create({
      email,
      senha,
      ativo,
      catalogo_oferta,
      termo_de_aceite,
    });
    return newUser;
  },
};

module.exports = UserService;
