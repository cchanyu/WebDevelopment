import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DisplayAllStudent from './DisplayAllStudent';
import './Student.css';

class Student extends Component {

    render() {
        return (
            <div className="Background002">
                <div className="Background003">
                <div className="student001">
                   <h2 className="TextCenter StudentHeader">All Students</h2> 
                   <Link to="/studentAdd"><button className="student-button">Add Student</button></Link>
                </div>
                <div className="Background003">
                    <DisplayAllStudent/>
                    <p className="Background003 S001"></p>
                </div>
                </div>
            </div>
        )
    }
}

export default Student;