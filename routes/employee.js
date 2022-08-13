import Express from "express";
import {
  createNewEmployee,
  getAllEmployees,
} from "../controllers/employeesController.js";
// import {
//   createNewEmployee,
//   getAllEmployees,
//   getEmployee,
// } from "../controllers/employeesController.js";
const router = Express.Router();

router.route("/").get(getAllEmployees).post(createNewEmployee);
// router.route("/:id").get(getEmployee);

export default router;
