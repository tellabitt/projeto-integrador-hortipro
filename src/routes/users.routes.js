const { Router } = require("express");
const ash = require("express-async-handler");
const { celebrate, Segments, Joi } = require("celebrate");
const usersController = require("../controllers/users.controller");

const router = Router();

const validation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

router.post("/login", validation, ash(usersController.login));
router.post("/register", validation, ash(usersController.register));

module.exports = router;
