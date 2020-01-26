import React, { Component } from 'react';

import './CampusEdit.css';
import StudentPic from '../../src/img/Person1.jpeg'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

class CampusEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campusName: 'Lehman College',
            campusAddress: '250 Bedford Park Blvd W, The Bronx, NY 10468',
            campusImage: 'https://reelabilities.org/newyork/wp-content/uploads/sites/22/2018/01/IMG_0176.jpg',
            studentCount: '0',
            campusDescription: 'Lehman College is a senior college of the City University of New York (CUNY) in the Bronx borough of New York City. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967. The college is named after Herbert H. Lehman, a former New York governor, United States senator, philanthropist, and the son of Lehman Brothers co-founder Mayer Lehman. It is a public, comprehensive, coeducational liberal arts college with more than 90 undergraduate and graduate degree programs and specializations.',
            campusCount: '',
            studentImage: ['https://calhoun.edu/wp-content/uploads/2018/05/high-shcool-student.jpg', ''],
            studentName: ['Christina Pagan', '']
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('campusEdit');
        const speedRef = rootRef.child('campusName');
        speedRef.on('value', snap => {
            this.setState({
                campusName: snap.val()
            })
        })
    }

    getStudent(props) {
        return (<Link className="cp clr" to="/student"><img className="logoSize4" src={this.state.studentImage} alt=""></img><p className="oz1">{this.state.studentName}</p>
            <button className="clr microbtn">Remove</button></Link>)
    }

    render() {
        let allStudent = this.getStudent(this.state.studentCount);

        return (
            <div className="la">
                <div className="z1">
                    <h2 className="clr">Campus Information Edit</h2>
                    <div className="fl1">
                        <p className="clr">Campus Name:</p>
                        <input type="text" className="in1 clr" value={this.state.campusName}></input>
                    </div>
                    <div className="fl1">
                        <p className="clr">Campus Location:</p>
                        <input type="text" className="in1 clr" value={this.state.campusAddress}></input>
                    </div>
                    <div className="fl1">
                        <p className="clr">Campus Image URL:</p>
                        <input type="text" className="in1 clr" value={this.state.campusImage}></input>
                    </div>
                    <div className="fl1">
                        <p className="clr">Campus Description:</p>
                        <textarea className="in1 clr" value={this.state.campusDescription}></textarea>
                    </div>
                    <div><Link to="/campus"><button className="clr Button">Save Changes</button></Link></div>
                </div>
                <div>
                    <h2 className="clr">Student on campus</h2>
                    <select className="clr Button">
                        <option value="" selected>Select Student</option>
                        <option value="Andrew Johnson">Andrew Johnson</option>
                    </select>
                    <button className="clr Button">Add to campus</button>
                </div>
                <div>
                    {allStudent}
                </div>
            </div>
        );
    }
}

export default CampusEdit;