const { User, Country, Tank } = require("../models");

class Controllers {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      res.status(201).json({ pw: password, email: email });
      res.json("User has been successfully created");
    } catch (err) {
      next(err);
    }
  }
  catch(err) {
    next(err);
  }
}
