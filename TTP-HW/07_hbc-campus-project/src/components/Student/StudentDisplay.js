import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './StudentDisplay.css';
import Person1 from '../../src/img/Person1.jpeg';


class StudentDisplay extends Component {
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
        studentImage: 'https://calhoun.edu/wp-content/uploads/2018/05/high-shcool-student.jpg'
    }
}
  
  render(){
    return(
      <div>
        <div className="StudentRow">
          <Link to="/studentDisplayStudent" className="cc1">
          <div className="CampusCard">
              <img className="LS2" src={this.state.studentImage} alt="Image"></img>
              <div>
                  <p className="oz1">{this.state.studentName}</p>
                  <p className="oz2">{this.state.campusName} Campus</p>
                  <Link to="/studentEdit" className="le"><button className="minibtn">Edit</button></Link>
                  <Link to="/student" className="le"><button className="minibtn">Remove</button></Link>
              </div>
          </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default StudentDisplay;