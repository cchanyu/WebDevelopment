const pg = require('pg');

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Project1',
    password: 'postgres',
    port: 5432
});
db.connect();

/************Student Queries************/

//GRABS ALL STUDENT THIS WORKS
const getStudents = (request,response) => {
    db.query('SELECT * FROM students ', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
//GRAB ONE STUDENT BY ID
const getStudentByID = (request, response) => {
    const id = request.params.id;

        db.query(`SELECT * FROM students WHERE student_id = $1`, [id], (error, results) => {
            if(error) {
                throw error
            }
            //console.log(results.rows);
            response.status(200).json(results.rows)
        })
}
//CREATE ONE STUDENT THIS WORKS WITH CURL ONLY
const createStudent = (request, response) => {
    const  {firstname, lastname, email, imageurl, gpa} = request.body;
    console.log(firstname + lastname + email + imageurl + gpa)
    db.query(`INSERT INTO students (firstname, lastname, email, imageurl, gpa) VALUES ($1, $2, $3, $4, $5)`,  [firstname, lastname, email, imageurl, gpa], (error, results) => {
        if(error) {
            throw error
           //response.send(error)
        }
        response.status(201).send(`Student added ${results}`)
    })
}
//UPDATE ONE STUDENT WORK
const updateStudent = (request, response) => {
    const id = parseInt(request.params.id);
    const {firstname, lastname, email, imageurl, gpa} = request.body;

    db.query(
        `UPDATE students SET firstname = $1, lastname = $2, email = $3, imageurl = $4, gpa = $5 WHERE student_id = $6`,
        [firstname, lastname, email, imageurl, gpa, id],
        (error, results) => {
            if(error) {
                throw error
            }
            response.status(200).send(`Modified student with ID of: ${id}`)
        }
    )
}

//DELETES ONE STUDENT THIS WORKS
const deleteStudent = (request, response) => {
    const id = parseInt(request.params.id);

    db.query(`DELETE FROM students WHERE student_id = $1`, [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).send(`Student Deleted with ${id}`)
    })
}

                                        /*************CAMPUS QURIES *************/
//GRAB ALL CAMPUSES


/**CAMPUS  */
//GET all campuses
const getCampuses = (request,response) => {
    db.query('SELECT * FROM campus', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getCampusByID = (request, response) => {
    const id = request.params.id;

        db.query(`SELECT * FROM campus WHERE campus_id = $1`, [id], (error, results) => {
            if(error) {
                throw error
            }
            //console.log(results.rows);
            response.status(200).json(results.rows)
        })
}
//Create a campus
const createCampus = (request, response) => {
    const  {name,imageurl,address, description} = request.body;

    db.query(`INSERT INTO campus (name,imageurl,address, description) VALUES ($1, $2, $3, $4)`,  [name,imageurl,address, description], (error, results) => {
        if(error) {
            throw error
        }
        response.status(201).send(`campus added ${results}`)
    })
}
//Updates Campus
const updateCampus = (request, response) => {
    const id = parseInt(request.params.id);
    const {name,imageurl,address, description} = request.body;

    db.query(
        `UPDATE campus SET name = $1, imageurl = $2, address = $3, description =$4 WHERE campus_id = $5`,
        [name,imageurl,address, description, id],
        (error, results) => {
            if(error) {
                throw error
            }
            response.status(200).send(`Modified student with ID of: ${id}`)
        }
    )
}
//Delete CAmpus
const deleteCampus = (request, response) => {
    const id = parseInt(request.params.id);

    db.query(`DELETE FROM campus WHERE campus_id = $1`, [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).send(`Student Deleted with ${id}`)
    })
}
//Stdent CARD DROP DOWN MEANUE
const addCampusToStudent = (request, response) => {

    const id = parseInt(request.params.id);
    //const name = request.params.name;
    const  {name} = request.body;
    
    
    db.query(`INSERT INTO students_campus (student_id, campus_id) VALUES ($1, (SELECT campus_id FROM campus WHERE name = $2))`,  [id, name], (error, results) => {
        if(error) {
            throw error
        }
        response.status(201).send(`campus added ${results}`)
    })
}
const CampusSearchStudent = (request, response) => {

    const campusID = parseInt(request.params.cid);
    const studentID = parseInt(request.params.sid);
    
    //const name = request.params.name;
    //const  {name} = request.body;
    
    
    db.query(`SELECT * FROM students WHERE student_id = $1`,  [studentID], (error, results) => {
        if(error) {
            response.send('No student Found')
        }
        response.status(201).send(results.rows)
    })
}
//
//GRAB THE CAMPUS AND ALL ITS STUDENTS

/**   
const addStudentToCampus = (request, response) => {
    //id of the campus
    const campusID = parseInt(request.params.cid);
    const {student_id} = request.body;

    
    db.query(`INSERT INTO students_campus (student_id, $2)`,  [student_id, campusID], (error, results) => {
        if(error) {
            throw error
        }
        response.status(201).send(`student added to campus ${results}`)
    })


}*/



module.exports = {
    getStudentByID,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    createCampus,
    getCampuses,
    getCampusByID,
    updateCampus,
    deleteCampus,
    addCampusToStudent,
    CampusSearchStudent

}