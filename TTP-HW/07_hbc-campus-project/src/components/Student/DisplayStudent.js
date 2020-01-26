import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentImg from '../../src/img/Person1.jpeg';
import './DisplayStudent.css';
// import campusDisplay from '../Campus/CampusDisplay';
import CampusPic from '../../src/img/HBCBuilding1.jpeg'


class DisplayStudent extends Component {
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


  render() {
    return (
      <header className="Background002">
        <div className="centerz2 center3 Display001">
          <div>
            <img className="logoSize2" src={this.state.studentImage} alt="Image"></img>
            <p className="original"></p>
          </div>
          <form className="center2">
            <h2 className="original2">{this.state.studentName}</h2>
            <p className="original">GPA: {this.state.GPA}</p>
            <p className="original">Message: {this.state.studentDescription}</p>
            <Link to="/studentEdit"><button className="Button Green">Edit</button></Link>
            <Link to="/student"><button className="Button Red">Delete</button></Link>
          </form>
        </div>
        <div className="centerz2 center3 cz1">
          <p>Campus Name</p>
          <Link to="/studentEdit"><button className="Button">Add to Campus</button></Link>
        </div>
        <div className="centerz2 center3 cz2">
          <Link to="/campus"><img className="logoSize3" src={this.state.campusImage} alt=""></img></Link>
        </div>
      </header>
    )
  }
}

export default DisplayStudent;