const express = require('express')
const path = require('path')
const students = require('./models/students.js')
const app = express();
const port = 3000;


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({ extended: false }));

app.get('/students', (req, res) => {
    res.render('Index', { students: students })
})
app.get('/student/:index', (req, res) => {
    res.render('Show', { student: students[req.params.index] })
})
app.get('/AddStudent', (req, res) => {
    res.render('AddStudent')
})
app.post('/students', (req, res) => {
    students.push(req.body)
    res.redirect('/students')
})
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})