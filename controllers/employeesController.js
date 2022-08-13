// import { addNewEmployee, fetchEmployeeList } from "../models/employeeList.js";
import employeeModel from "../models/employeeList.js";

const Employee = employeeModel;

export const getAllEmployees = async (req, res) => {
  console.log(Employee);
  try {
    const employeeList = await Employee.findAll();
    res.json(employeeList);
  } catch (err) {
    res.status(400).json({ message: "Failed" });
  }
};

// export const getEmployee = (req, res) => {
//   res.json({ id: req.params.id });
// };

export const createNewEmployee = async (req, res) => {
  if (!req.body.firstname) {
    res.status(400).json({ message: "Firstname Should not be empty" });
  } else {
    const details = {
      firstname: req.body?.firstname,
      lastname: req.body?.lastname,
    };
    try {
      // const [newEmployee] = await addNewEmployee(details);
      const newEmployee = await Employee.create(details);
      res.status(200).json({ message: "added", data: newEmployee });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
