import React, { Component } from 'react';
import { Route, NavLink, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home';
import Campus from '../Campus/Campus';
import CampusBlank from '../Campus/CampusBlank';
import CampusAdd from '../Campus/CampusAdd';
import CampusShow from '../Campus/CampusShow';
import CampusEdit from '../Campus/CampusEdit';

import Student from '../Student/Student';
import StudentAdd from '../Student/StudentAdd';
import DisplayAllStudent from '../Student/DisplayAllStudent';
import StudentEdit from '../Student/StudentEdit';
import DisplayStudent from '../Student/DisplayStudent';




import NotFound from '../NotFound/NotFound';

import './Navigation.css';
import HBClogo from '../../src/img/HBClogo.png';

class Navigation extends Component {

    

    render() {
        return (
            <Router className="router">
                <div>
                    <ul className="container">
                        <li className="container2">
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/campus">Campus</NavLink>
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/student">Student</NavLink>
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/home">Home</NavLink>
                        </li>
                        <Link className="zz" to="/home">
                        <div className="container5"><img className="container4" src={HBClogo} />
                            <h2 className="container6">Campus Manager</h2></div></Link>
                    </ul>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />

                        <Route path="/campus" component={Campus} />
                        <Route path="/campusBlank" component={CampusBlank} />
                        <Route path="/campusAdd" component={CampusAdd} />  
                        <Route path="/campusShow" component={CampusShow} />  
                        <Route path="/campusEdit" component={CampusEdit} />  

                        <Route path="/student" component={Student} /> 
                        <Route path="/studentAdd" component={StudentAdd} />
                        <Route path="/studentDisplayAllStudents" component={DisplayAllStudent} /> 
                        <Route path="/studentDisplayStudent" component={DisplayStudent} />
                        <Route path="/studentEdit" component={StudentEdit} /> 
                        

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navigation;