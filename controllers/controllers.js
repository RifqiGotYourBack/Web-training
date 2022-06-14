const countryId = require("../helpers/countryId");
const { Users, Countries, Tanks } = require("../models");

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
  static async login(req, res, next) {
    try {
      let findUser = await Users.findOne({ where: { email: req.body.email } });
      if (req.body.password == findUser.password) {
        res.status(200).json({ status: "Authentication succeed" });
        console.log(findUser);
      }
    } catch (err) {
      next(err);
    }
  }
  static async findTanksByCountry(req, res, next) {
    try {
      let findTanksByCountry = await Tanks.findAll({
        where: { countryId: `${countryId(req.body.country)}` },
      });
      res.status(200).json(findTanksByCountry);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controllers;
