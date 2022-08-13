import Sequelize from "sequelize";
import db from "../util/database.js";

const Student = db.sequelize.define("studentList", {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
});

export default Student;
