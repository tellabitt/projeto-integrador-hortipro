module.exports = {
  dialect: "mysql",
  database: "hortipro",
  host: "127.0.0.1",
  port: 3307,
  username: "root",
  password: "hortipro",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_date",
    updatedAt: "updated_date",
  },
};
