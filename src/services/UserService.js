const UserModel = require("../database/models/Usuario");
const { v4: uuidv4 } = require("uuid");

const UserService = {
  userList: () => {
    return UserModel.findAll();
  },
  createUser: (email, senha, ativo, catalogo_oferta, termo_de_aceite) => {
    const newUser = new UserModel({
      v4: uuidv4(),
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
