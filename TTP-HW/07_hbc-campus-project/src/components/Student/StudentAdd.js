import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './StudentAdd.css';

class StudentAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }



  render(){
    return (
      <header className="Background">
        <div className="center1 Add002">
          <div className="center2 Add002">
            <h2 className="item3">Add a New Student</h2>
            <form className=" formatColumn" action="" method="POST">
              <div>
                <label className="lo3 textFont">First Name: </label>
                <input type="text" className="Add001" id="studentFName" placeholder="Enter Your First Name" required></input>
              </div>

              <div>
                <label className="lo3 textFont">Last Name: </label>
                <input type="text" id="studentLName" className="Add001" placeholder="Enter Your Last Name" required></input>
              </div>

              <div>
                <label className="lo3 textFont">Email: </label>
                <input type="email" id="studentEmail" className="Add001" placeholder="Enter the Email" required></input>
              </div>

              <div>
                <label className="lo3 textFont">Image: </label>
                <input type="text" id="studentImg-url" className="Add001" placeholder="Enter An Image URL" required></input>
              </div>
                          
              <Link to="/student"><button className="item2 Button">Add Student</button></Link>
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default StudentAdd;
