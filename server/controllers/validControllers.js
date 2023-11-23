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

 const validGroup = (group) => {
    const groupNumber = parseInt(group);

    if (isNaN(groupNumber)) {
        return { status: false, message: "Поле group має бути числом." };
    }

    if (groupNumber < 0 || groupNumber > 1000) {
        return { status: false, message: "Значення group має бути в межах від 0 до 1000." };
    }

    return { status: true };
};

const validRate = (rate) => {
    const rateNumber = parseFloat(rate);

    if (isNaN(rateNumber)) {
        return { status: false, message: "Поле rate має бути числом." };
    }

    if (rateNumber < 0 || rateNumber > 10) {
        return { status: false, message: "Значення rate має бути в межах від 0 до 10." };
    }

    return { status: true };
};

module.exports = {
    validStudentId,
    validName,
    validGroup,
    validRate
};