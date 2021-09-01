const Student = require("./studentModel");
//-----------------------------------------------------
const getAllStudents = () => {
	return new Promise((resolve, reject) => {
		Student.find({}, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};
//-----------------------------------------------------
const getStudentById = (studentId) => {
	return new Promise((resolve) => {
		Student.findById(studentId, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				resolve(data);
			}
		});
	});
};
//-----------------------------------------------------
const addStudent = (newStudent) => {
	return new Promise((resolve) => {
		let studentToSave = new Student({
			fullName: newStudent.fullName,
			email: newStudent.email,
			faculty: newStudent.faculty,
			birthDate: newStudent.birthDate,
		});

		studentToSave.save((err) => {
			if (err) {
				console.log(err);
			} else {
				resolve(studentToSave);
			}
		});
	});
};
//-----------------------------------------------------
const updateStudent = (studentId, studentToUpdate) => {
	return new Promise((resolve) => {
		Student.findByIdAndUpdate(
			studentId,
			{
				fullName: studentToUpdate.fullName,
				email: studentToUpdate.email,
				faculty: studentToUpdate.faculty,
				birthDate: studentToUpdate.birthDate,
				grades: studentToUpdate.grades,
			},
			(err) => {
				if (err) {
					console.log(err);
				} else {
					resolve("Update Student");
				}
			}
		);
	});
};
//-----------------------------------------------------
const deleteStudent = (studentId) => {
	return new Promise((resolve) => {
		Student.findByIdAndDelete(studentId, (err) => {
			if (err) {
				console.log(err);
			} else {
				resolve("Student Deleted");
			}
		});
	});
};
//-------------------------------------------------------------------------------

module.exports = {
	getAllStudents,
	getStudentById,
	addStudent,
	updateStudent,
	deleteStudent,
};
