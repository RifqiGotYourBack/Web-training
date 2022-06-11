const { Users, Country, Tank } = require("../models");

class Controllers {
  static async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      let createUser = await Users.create({ email, password });
      res.status(201).json({ id: createUser.id, email: createUser.email });
    } catch (err) {
      next(err);
    }
  }
  static async getTanks(req, res, next) {
    try {
    } catch (err) {}
  }
}

module.exports = Controllers;
