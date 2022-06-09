const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "namagwrifqi",
    port: "5432",
    database: "perntodos",
});

module.exports = pool;