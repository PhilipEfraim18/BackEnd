const express = require('express');
const { request } = require('http');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const courses = [
    {id: 1, name: 'Web Development'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Cybersecurity'}
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
});

//http course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('Course not found');
    } 
    res.send(course);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})