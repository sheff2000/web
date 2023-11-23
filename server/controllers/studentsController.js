let { dataStudents } = require('../dataBase/db.js');

const getStudents = () => {
    // поляем всех студентов
    return dataStudents;
};

const getStudentInfo = (id) => {

    const student = dataStudents.find(student => student.id.toString() === id);
    if (!student) {
        // студента нет
        return null; // или выбросить исключение, или вернуть сообщение об ошибке
    }
    return student;
};

const addStudent = (student) => {
    // Логика добавления нового студента
    dataStudents.push(student);
};

const updateStudent = (id, newData) => {
    const index = dataStudents.findIndex(student => student.id === Number(id));
    console.log('updateStudent (id, newData) = ', id, ' || ', newData);
    if (index !== -1) {
        dataStudents[index].firstName = newData.firstName;
        dataStudents[index].lastName = newData.lastName;

        return true;
    } else {
        // не нашли 
        console.log('не нашли студента с номером - ', id);
        //console.log('все студенты: ',dataStudents);
        return false;
    }
};

const deleteStudent = (id) => {
        try {
            const index = dataStudents.findIndex(student => student.id === Number(id));
            dataStudents.splice(index, 1);
            return true;
        } catch {
            return false;
        }
        
};

module.exports = {
    getStudents,
    getStudentInfo,
    addStudent,
    updateStudent,
    deleteStudent
};