const express = require('express');

const router = express.Router();

const studentsController = require('../controllers/studentsController.js');
const validController = require('../controllers/validControllers.js');


router.post('/', (req, res) => {
    console.log('Home Page');
    res.status(200).send('API to work with Students Data');
});
// POST

router.post('/items', (req, res) => {
    // Логика создания нового Item
    const userData = req.body;
    // Логика создания пользователя с использованием данных из userData
    res.status(201).send('Пользователь создан');
});

// GET
router.get('/students', (req, res) => {
    // гет тупо отдает весь массив студентов
    const students = studentsController.getStudents();
   //console.log('Router STUDENTS - ', dataStudents);
    res.status(200).json(students);
});

// GET : id
router.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const studentInfo = studentsController.getStudentInfo(studentId);
    if (!studentInfo) {
        res.status(404).json({ message: "Student not found" });
    } else {
        res.json(studentInfo);
    }
});

// Update : id
router.put('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const { firstName, lastName, group, rate } = req.body;
    //console.log('Server - UPDATE ROUTER - student ID = ', req.body);
    const valid = {
        studentId: validController.validStudentId(studentId),
        firstName: validController.validName(firstName),
        lastName: validController.validName(lastName),
    }
    // console.log('Valid result = ', valid);
    // идем по обьекту и собираем все ошибку в кучу
    const errors = Object.values(valid).reduce((acc, current) => {
        if (!current.status) {
            acc.push(current.message);
        }
        return acc;
    }, []);
    //console.log(' Errors esult = ', errors);
    // смотрим что собрали
    if (errors.length > 0) {
        // что то собрали - значит ошибку на сервер
        return res.status(400).json({ message: errors.join(', ') });
    }

    // типа ошибко нет - запуск обновления инфы
    const isUpdate =  studentsController.updateStudent(studentId, { firstName, lastName, group, rate })

    if (!isUpdate) {
        return res.status(400).json({ message: "Виникла помилка при спробі оновити дані " });
    }
    res.status(200).json({ message: "Інформація про студента оновлена" });
});



// Delete : id
router.delete('/students/:id', (req, res) => {
    //console.log('Id delete - ', req.params);
    const studentId = req.params.id;

    const valid = validController.validStudentId(studentId);

    if (!valid.status) {
        return res.status(400).json({ message: valid.message });
    }

    const isDelete = studentsController.deleteStudent(studentId);
    if (!isDelete) {
        return res.status(400).json({ message: 'Не змогли видалити студента з масиву' });
    }
    
    res.status(200).json({message:'Ok все видалено'});
});

module.exports = router;
