const { DataTypes, Model } = require("sequelize");

class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuario: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [3, 255],
              msg: "Email deve ter entre 3 e 255 caracteres",
            },
          },
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "Senha deve ter entre 3 e 255 caracteres",
            },
          },
        },
        ativo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        catalogo_oferta: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        termo_de_aceite: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      { sequelize, tableName: "USUARIO" }
    );
  }
}

module.exports = UserModel;
