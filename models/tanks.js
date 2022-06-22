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
      tankName: {
        type: DataTypes.STRING,
      },
      turret: {
        type: DataTypes.STRING,
      },
      rank: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
      countryId: {
        type: DataTypes.INTEGER,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Tanks",
    }
  );
  return Tanks;
};
