const { response } = require("express");
const { Op } = require("sequelize");
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
      let findTanksByCountry = await Countries.findAll({
        where: { countryName: req.body.country },
        include: { model: Tanks, as: "Tanks" },
      });
      res.status(200).json(findTanksByCountry);
    } catch (err) {
      next(err);
    }
  }
  static async findTanksByName(req, res, next) {
    try {
      let findTanksByName = await Tanks.findOne({
        where: { tankName: req.body.name },
        include: { model: Countries, as: "Tankinfo" },
      });
      res.status(200).json(findTanksByName);
    } catch (err) {
      next(err);
    }
  }
  static async findTanksByType(req, res, next) {
    try {
      let findTanksByType = await Tanks.findAll({
        where: { type: req.body.type },
      });
      res.status(200).json(findTanksByType);
    } catch (err) {
      next(err);
    }
  }
  static async addTank(req, res, next) {
    try {
      let findCountry = await Countries.findOne({
        where: { countryName: req.body.country },
      });
      let addTank = await Tanks.create({
        tankName: req.body.name,
        turret: req.body.turret,
        rank: req.body.rank,
        type: req.body.type,
        countryId: findCountry.id,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteTank(req, res, next) {
    try {
      let deleteTank = await Tanks.update(
        { is_active: false },
        { where: { tankName: req.body.name } }
      );
      res.status(200).json({ status: "Tank deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
  static async updateTank(req, res, next) {
    try {
      let findCountry = await Countries.findOne({
        where: { countryName: req.body.country },
      });
      let updateTank = await Tanks.update(
        {
          tankName: req.body.name,
          turret: req.body.turret,
          rank: req.body.rank,
          type: req.body.type,
          countryId: findCountry.id,
        },
        { where: { tankName: req.body.target } }
      );
      res.status(200).json({ status: "Update completed" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controllers;
