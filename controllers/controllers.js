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
      let getTanks = await Tanks.findAll();
      res.status(200).json(getTanks);
    } catch (err) {
      next(err);
    }
  }
  static async addTanks(req, res, next) {
    try {
      let addTanks = await Tanks.create({
        userID,
      });
    } catch (errr) {}
  }
}

module.exports = Controllers;
