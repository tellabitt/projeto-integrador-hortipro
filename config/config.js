module.exports = {
  dialect: "mysql",
  database: "hortipro",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "hortipro",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
