const express = require("express");
const router = require("./routers");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.listen(3000, () => {
  console.log("server has started on port 3000");
});

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tanks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tanks.belongsTo(models.Countries, {
        foreignKey: "countryId",
        as: "Tankinfo",
      });
    }
  }

  Tanks.init(
    {
      tankName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tanks",
    }
  );
  return Tanks;
};
