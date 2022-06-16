"use strict";

const { DATE } = require("sequelize");

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
    let data = fs.readFileSync("./seeders/Sweden.json");
    data = JSON.parse(data);
    data.forEach((val) => {
      val.createdAt = new Date();
      val.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Tanks", data, {});
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
