// import db from "../util/database.js";
import Sequelize from "sequelize";
import db from "../util/database.js";

// export const fetchEmployeeList = () => {
//   return db.execute("select * from employeelist");
// };

// export const addNewEmployee = (details) => {
//   return db.execute(
//     "insert into employeelist (firstname,lastname) values (?,?)",
//     [details.firstname, details.lastname]
//   );
// };

const Employee = db.sequelize.define("employeelists", {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
});

export default Employee;
