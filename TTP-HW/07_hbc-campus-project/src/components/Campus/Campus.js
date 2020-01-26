import React, { Component } from 'react';

import './Campus.css';
import CampusDisplay from './CampusDisplay';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Campus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campusName: 'Lehman College',
            campusAddress: '250 Bedford Park Blvd W, The Bronx, NY 10468',
            campusImage: 'https://reelabilities.org/newyork/wp-content/uploads/sites/22/2018/01/IMG_0176.jpg',
            studentCount: '0',
            campusDescription: 'Lehman College is a senior college of the City University of New York (CUNY) in the Bronx borough of New York City. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967. The college is named after Herbert H. Lehman, a former New York governor, United States senator, philanthropist, and the son of Lehman Brothers co-founder Mayer Lehman. It is a public, comprehensive, coeducational liberal arts college with more than 90 undergraduate and graduate degree programs and specializations.',
            campusCount: ''
        }
    }

    getCampusDisplay(props) {
        Axios.get('https://campusmanager-66533.firebaseio.com/campus.json')
            .then(response => {
                // this.setState({campusName: response.data})
            });
        return <CampusDisplay 
            campusName={this.state.campusName}
            campusImage={this.state.campusImage}
            studentCount={this.state.studentCount}
            campusCount={this.state.campusCount} />
    }

    render() {
        let allCampus = this.getCampusDisplay(this.state.campusCount);
        return (
            <div className="Background002">
                <div className="Background003">
                <div className="ContentHeader">
                    <h2 className="CampusHeader">All Campuses</h2>
                    <Link to="/campusAdd">
                        <button className="Button">Add Campus</button>
                    </Link>
                </div>
                <div className="cc2">
                    {allCampus}
                </div>
                <p className="S001"></p>
                </div>
            </div>
        )
    }
}

export default Campus;