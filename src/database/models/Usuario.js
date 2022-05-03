const UserModel = (sequelize, DataTypes) => {
  sequelize.define(
    "Usuario",
    {
      EMAIL: {
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
      SENHA: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: "Senha deve ter entre 3 e 255 caracteres",
          },
        },
      },
      ATIVO: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      CATALOGO_OFERTA: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: "Catalogo de Oferta deve ter entre 3 e 255 caracteres",
          },
        },
      },
      TERMO_DE_ACEITE: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    {
      tableName: "USUARIO",
    }
  );
};

module.exports = UserModel;
