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
