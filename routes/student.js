import Express from "express";
import { getAllStudents } from "../controllers/studentsController.js";
// import {
//   createNewEmployee,
//   getAllEmployees,
//   getEmployee,
// } from "../controllers/employeesController.js";
const router = Express.Router();

router.route("/").get(getAllStudents);
// router.route("/:id").get(getEmployee);

export default router;
