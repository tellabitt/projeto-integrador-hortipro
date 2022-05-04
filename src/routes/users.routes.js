const { Router } = require("express");
const controller = require("../controllers/UserController");

const router = Router();

router.get("/", (req, res) => {
  res.render('home')
});

router.get("/login", (req, res) => {
  res.render('login')
});

router.post("/cadastro", controller.create);

router.post("/logar", controller.logar);

router.post("/finalizacao-compra", (req, res) => {
  res.render('finalizacao-compra')
});

module.exports = router;
