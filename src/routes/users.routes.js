const { Router } = require("express");
const controller = require("../controllers/UserController");

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/", function (req, res) {
  res.sendFile("home.html", { root: __dirname });
});

router.post("/cadastro", controller.create);

module.exports = router;
