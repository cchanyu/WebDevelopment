import React, { Component } from 'react';

import './Campus.css';
import CampusDisplay from './CampusDisplay';
import { Link } from 'react-router-dom';

class Campus extends Component {

    state = {
        campusName: [],
        campusImage: [],
        studentCount: [],
        campusCount: ''
    }

    getCampusDisplay(props) {
        return <CampusDisplay />
    }

    render() {
        let allCampus = this.getCampusDisplay(this.state.campusCount);
        return (
            <div>
                <div className="ContentHeader">
                    <h2 className="CampusHeader">All Campuses</h2>
                    <Link to="/campusAdd">
                        <button className="Button">Add Campus</button>
                    </Link>
                </div>
                <div className="cc2">
                    <h2 className="CampusHeader">Please add a campus!</h2>
                </div>
            </div>
        )
    }
}

export default Campus;