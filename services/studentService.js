const student = require('../models/student');
const studentModel = require('../models/student');

exports.getAllStudents = async () => {
    const students = await studentModel.find();
    return students;
};

exports.getAllStudentById = async (id) => {
    const student = await studentModel.findById(id);
    return student;
};

exports.createStudent = async (student) => {
    const newStudent = new studentModel(student);
    await newStudent.save();
    return newStudent;
};

exports.updateStudent = async (id, student) => {
    const updateStudent = await studentModel.findByIdAndUpdate(id, student);
    return updateStudent;
};

exports.deleteStudent = async (id) => {
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    return deleteStudent;
};


