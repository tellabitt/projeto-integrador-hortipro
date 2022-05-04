const { Router } = require("express");
const controller = require("../controllers/UserController");
const path = require('path');

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/home.html'));
});

router.post("/cadastro", controller.create);

router.post("/login", controller.login);

module.exports = router;
