const { DataTypes, Model } = require("sequelize");

class ClienteModel extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [11, 11],
              msg: "CPF deve ter 11 caracteres",
            },
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: {
                args: [3, 255],
                msg: "Nome deve ter entre 3 e 255 caracteres",
              },
            },
          },
          sobrenome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: {
                args: [3, 255],
                msg: "Sobrenome deve ter entre 3 e 255 caracteres",
              },
            },
          },
          telefone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: {
                args: [10, 11],
                msg: "Telefone deve ter entre 10 e 11 caracteres",
              },
            },
          },
          celular: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: {
                args: [10, 11],
                msg: "Celular deve ter entre 10 e 11 caracteres",
              },
            },
          },
        },
      },
      { sequelize, tableName: "Cliente" }
    );
  }
}

module.exports = ClienteModel;
