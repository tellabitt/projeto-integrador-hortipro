module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "Cliente",
    {
      CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [11, 11],
            msg: "CPF deve ter 11 caracteres",
          },
        },
        NOME: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        SOBRENOME: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        TELEFONE: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: {
              args: [10, 11],
              msg: "Telefone deve ter entre 10 e 11 caracteres",
            },
          },
        },
        CELULAR: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [10, 11],
              msg: "Celular deve ter entre 10 e 11 caracteres",
            },
          },
        },
        ID_ENDERECO: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: {
              args: [1, 11],
              msg: "ID_ENDERECO deve ter entre 1 e 11 caracteres",
            },
          },
        },
        CREATED_DATE: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        UPDATED_DATE: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
    },
    {
      tableName: "CLIENTE",
    }
  );
};
