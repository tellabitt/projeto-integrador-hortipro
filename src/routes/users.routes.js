const { Router } = require("express");
const controller = require("../controllers/UserController");

const router = Router();

router.get("/", (req, res) => {
  res.sendFile("../public/home.html", { root: __dirname });
});

router.post("/cadastro", controller.create);

module.exports = router;
