let { dataStudents } = require('../dataBase/db.js');

// проверка адйи студента
const validStudentId = (id) => {
   // проверка на наличие и что это число
    if (!id || isNaN(id)) {
        return  {status: false,  message: "Некорректный ID студента." };
    }
    id = Number(id);

    // проверяем что указанный номер в диапазоне доступном
    const studentExists = dataStudents.some(student => student.id === id);
    if (!studentExists) {
        return  {status: false,  message: "Студент з таким ID не знайден." };
    }

    return {status:true};
};

// проверка текстового поля
const validName = (name) => {
    // проверка first/last name студента
    if (!name || name.trim() === '') {
        return  {status: false,  message: "Поля firstName та lastName мають бути заповненні!" };
       
    }
 
     return {status:true};
 };



module.exports = {
    validStudentId,
    validName
};