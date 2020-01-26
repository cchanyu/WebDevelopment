import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DisplayAllStudent.css';
import StudentDisplay from './StudentDisplay';

class DisplayAllStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      student : []
    }
  }

  checkStudent = () => {
    if(this.state.student.length < 1){
      return <p>There is no Student available at the moment</p>
    }
  }

  render(){
    return (
      <div>
        <div className="div-warp">
          <div className="buttonEnd">
          </div>
          <div id="StudentContainer">
            <StudentDisplay />
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayAllStudent;