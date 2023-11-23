let { dataStudents } = require('../dataBase/db.js'); //либо подключаем наш файл с функциями для работы с БД

const getStudents = async () => {
    // поляем всех студентов
    return dataStudents;
};

const getStudentInfo = async (id) => {

    const student = dataStudents.find(student => student.id.toString() === id);
    if (!student) {
        // студента нет
        return null; 
    }
    return student;
};

const addStudent = async (studentData) => {
    try {
        const maxId = dataStudents.reduce((max, student) => student.id > max ? student.id : max, 0);

        dataStudents.push({ 
            id: maxId + 1,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            group: studentData.group,
            rate: studentData.rate
        });
    } catch (error) {
        console.error('шось ошибка при добалвении: ', error);
        return false;
    }

   return true;
};

const updateStudent = async (id, newData) => {
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

const deleteStudent = async (id) => {
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