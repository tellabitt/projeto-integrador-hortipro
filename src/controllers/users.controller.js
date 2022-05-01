const bcrypt = require("bcrypt");
const { User } = require("../models");

class usersController {
  static async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    const isEqualPassword = await bcrypt.compare(password, user.password);
    if (!isEqualPassword) {
      return res.json({ message: "Username or password is invalid" });
    }
    res.json(user);
  }

  static async register(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (user) {
      return res.status(400).json({ message: "Username already in use" });
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hash });
    res.status(201).json(newUser);
  }
}

module.exports = usersController;
