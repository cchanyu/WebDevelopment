const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3001;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
/** 
app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')

})*/
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//gets all students
app.get('/students', db.getStudents);
//gets student  by id
app.get('/student/:id', db.getStudentByID);
//create a student
app.post('/student/create/',bodyParser.json(), db.createStudent);
//update a student
app.post('/student/update/:id', db.updateStudent);
//delete a student
app.post('/student/delete/:id', db.deleteStudent);
//Add Campus student relationship
//app.get('/student/:id/:name', bodyParser.json(),db.addStudentToCampus)
app.post('/student/:id', bodyParser.json(),db.addCampusToStudent)
//gets all campus's
app.get('/campuses', db.getCampuses);
//gets campus by id
app.get('/campus/:id', db.getCampusByID);
//create a campus
app.post('/campus/add',bodyParser.json(), db.createCampus);
//update campus
app.post('/campus/update/:id', db.updateCampus);
//delete a campus
app.post('/campus/delete/:id', db.deleteCampus);
//Search Students From a single campus
app.get('/campus/:cid/:sid', db.CampusSearchStudent);
//Add a student to campus from campus age


app.listen(port, () => console.log(`Server WORKS on ${port}! THIS IS SERVER FOR STUDENTS`));