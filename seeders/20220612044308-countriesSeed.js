"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const fs = require("fs");
    let data = [
      { countryName: "USA" },
      { countryName: "Germany" },
      { countryName: "USSR" },
      { countryName: "Great Britain" },
      { countryName: "Japan" },
      { countryName: "China" },
      { countryName: "Italy" },
      { countryName: "France" },
      { countryName: "Sweden" },
    ];
    data.forEach((val) => {
      val.createdAt = new Date();
      val.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Countries", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
