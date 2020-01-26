import React, { Component } from 'react';

import './CampusShow.css';
import CampusPic from '../../src/img/HBCBuilding1.jpeg'
import StudentPic from '../../src/img/Person1.jpeg'
import { Link } from 'react-router-dom';

class CampusShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campusName: 'Lehman College',
            campusAddress: '250 Bedford Park Blvd W, The Bronx, NY 10468',
            campusImage: 'https://reelabilities.org/newyork/wp-content/uploads/sites/22/2018/01/IMG_0176.jpg',
            studentCount: '0',
            campusDescription: 'Lehman College is a senior college of the City University of New York (CUNY) in the Bronx borough of New York City. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967. The college is named after Herbert H. Lehman, a former New York governor, United States senator, philanthropist, and the son of Lehman Brothers co-founder Mayer Lehman. It is a public, comprehensive, coeducational liberal arts college with more than 90 undergraduate and graduate degree programs and specializations.',
            campusCount: '',
            studentImage: 'https://calhoun.edu/wp-content/uploads/2018/05/high-shcool-student.jpg'
        }
    }

    render() {
        return (
            <header className="Background002">
                <div className="centerz2 center3 Display001">
                    <div>
                        <img className="logoSize2" src={this.state.campusImage} alt="Image"></img>
                        <p className="original">Address: {this.state.campusAddress}</p>
                    </div>
                    <form className="center2">
                        <h2 className="original2">{this.state.campusName} Campus</h2>
                        <p className="original">Description: {this.state.campusDescription}</p>
                        <Link to="/campusEdit"><button className="Button Green">Edit</button></Link>
                        <Link to="/campus"><button className="Button Red">Delete</button></Link>
                    </form>
                </div>
                <div className="centerz2 center3 cz1">
                    <p>Students on this campus</p>
                    <Link to="/campusEdit"><button className="Button">Add a student</button></Link>
                </div>
                <div className="centerz2 center3 cz2">
                    <Link to="/student"><img className="logoSize3" src={this.state.studentImage} alt=""></img></Link>
                </div>
            </header>
        );
    }
}

export default CampusShow;
