const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/controllers");
router.post("/signIn", Controllers.signIn);
router.post("/login", Controllers.login);
router.post("/country", Controllers.findTanksByCountry);
router.post("/tankName", Controllers.findTanksByName);
router.post("/type", Controllers.findTanksByType);

module.exports = router;
// //Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.listen(3000, () => {
//   console.log("server has started on port 3000");
// });

// //Routes
// const User = require("../models/user");
// //Create a todo
// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const createTodo = await Todo.create({
//       description: "I anjing",
//       comment: "I ptyht",
//     });

//     res.json("Todo has been successfully created");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //Get all todos
// app.get("/todos", async (req, res) => {
//   try {
//     const allTodos = await Todo.findAll();

//     res.json(allTodos);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //Get a todo
// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await Todo.findOne({
//       where: { id: id },
//     });

//     res.json(todo);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //Update a todo
// app.patch("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     await Todo.update(
//       {
//         description,
//       },
//       { where: { id } }
//     );

//     res.json("Todo has been sucessfully updated");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //Delete a todo
// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = Todo.destroy({
//       where: { id: id },
//     });

//     res.json("Todo has been successfully deleted");
//   } catch (err) {
//     console.error(err.message);
//   }
// });
