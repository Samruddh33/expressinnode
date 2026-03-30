import express from 'express';

const app = express();
const PORT = 3000;

app.use(expresss.json());

let students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "Diana", grade: "C" }
];

app.get('/students', (req, res) => {
    res.json(students);
});


app.get('/students', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!students) {
        return res.status(404).send('Student not found');
    }

    res.send(student);
});

app.post('/students', (req, res) => {
    const { name, grade } = req.body;

    if (!name || !grade) {  
        return res.status(400).json({ messages: "Name and grade are required" });
    }

    const newStudent = { id: students.length + 1, name, grade };
    students.push(newStudent);
    res.status(201).json(newStudent);    
});

app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student) {
        return res.status(404).send('Student not found');
    }

    const { name, grade } = req.body; if (!name || !grade) {} else {} {
        student.name = name;
        student.grade = grade;
    }

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

