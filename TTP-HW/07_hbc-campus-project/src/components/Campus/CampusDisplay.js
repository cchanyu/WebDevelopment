import React, { Component } from 'react';

import './Campus.css';
import CampusPic from '../../src/img/HBCBuilding1.jpeg'
import { Link } from 'react-router-dom';

const campusDisplay = (props) => {

    // removeCampus(event){
    //     axios.delete('/addCampus.json', (req, res) => {
    //     res.json({
    //     query: req.query,
    //     params: req.params
    //     })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));
    //     }
    // }

return (
    <Link to="/campusShow" className="cc1">
        <div className="CampusCard">
            <img className="LS1" src={props.campusImage} alt="Image"></img>
            <div>
                <p className="oz1">{props.campusName} Campus</p>
                <p className="oz2">{props.studentCount} Students</p>
                <Link to="/campusEdit" className="le"><button className="minibtn">Edit</button></Link>
                <Link to="/campus" className="le"><button className="minibtn">Remove</button></Link>
            </div>
        </div>
    </Link>
);
}

export default campusDisplay;