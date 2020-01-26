import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Student/StudentEdit.css'

class StudentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusName: 'Lehman College',
      campusAddress: '250 Bedford Park Blvd W, The Bronx, NY 10468',
      campusImage: 'https://reelabilities.org/newyork/wp-content/uploads/sites/22/2018/01/IMG_0176.jpg',
      studentCount: '0',
      campusDescription: 'Lehman College is a senior college of the City University of New York (CUNY) in the Bronx borough of New York City. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967. The college is named after Herbert H. Lehman, a former New York governor, United States senator, philanthropist, and the son of Lehman Brothers co-founder Mayer Lehman. It is a public, comprehensive, coeducational liberal arts college with more than 90 undergraduate and graduate degree programs and specializations.',
      campusCount: '',
      studentName: 'Jane Mary Anne',
      studentImage: 'https://calhoun.edu/wp-content/uploads/2018/05/high-shcool-student.jpg',
      GPA: '3.98',
      studentDescription: 'Hello, my name is Jane Mary Anne. Nice to meet you.'
    }
  }

  getCampus(props) {
    return (<Link className="cp clr" to="/student"><img className="logoSize4" src={this.state.campusImage} alt=""></img><p className="oz1">{this.state.campusName}</p>
        <button className="clr microbtn">Remove</button></Link>)
  }

  render() {
    let allCampus = this.getCampus(this.state.studentCount);

    return (
      <div className="la">
        <div className="z1">
          <h2 className="clr">Student Information Edit</h2>
          <div className="fl1">
            <p className="clr">Student Name:</p>
            <input type="text" className="in1 clr" value={this.state.studentName}></input>
          </div>
          <div className="fl1">
            <p className="clr">Student GPA:</p>
            <input type="text" className="in1 clr" value={this.state.GPA}></input>
          </div>
          <div className="fl1">
            <p className="clr">Student Image URL:</p>
            <input type="text" className="in1 clr" value={this.state.studentImage}></input>
          </div>
          <div className="fl1">
            <p className="clr">Student Description:</p>
            <textarea className="in1 clr" value={this.state.studentDescription}></textarea>
          </div>
          <div><Link to="/student"><button className="clr Button">Save Changes</button></Link></div>
        </div>
        <div>
          <h2 className="clr">Current Campus</h2>
          <select className="clr Button">
            <option value="" selected>Select Campus</option>
            <option value="Andrew Johnson">Lehman College</option>
          </select>
          <button className="clr Button">Add to campus</button>
        </div>
        <div>
          {allCampus}
        </div>
      </div>
    )
  }
}

export default StudentEdit;