import studentModel from "../models/StudentList.js";

const Student = studentModel;

export const getAllStudents = async (req, res) => {
  const studentsData = await Student.findAll();
  res.status(200).send(studentsData);
};
