import express from 'express';

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// fake database
let students = [
    { id: 1, name: "adityay", course: "MERN" },
    { id: 2, name: "adii", course: "NODE" }
];

// GET student by id
app.get('/student/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "student not found" });
    }
});

// POST new student
app.post('/student', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});