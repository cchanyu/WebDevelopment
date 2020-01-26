import React, { Component } from 'react';
import { NavLink, Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Portfolio from '../Components/Portfolio';
import Stocks from '../Components/Stocks';
import Signup from '../Components/Signup';
import NotFound from '../Components/NotFound';


import '../css/navbar.css';
import HBClogo from '../Images/HBClogo.png';




class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            current : ''
        }
    }


    render() {
        return (
            <Router className="router">
                <div>
                    <ul className="container">
                        <li className="container2">
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/login">Login</NavLink>
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/stocks">Stocks</NavLink>
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/portfolio">Portfolio</NavLink>
                            <NavLink activeStyle={{ background: "lightgray" }} className="route" to="/home">Home</NavLink>
                        </li>
                        <Link className="zz" to="/home">
                            <div className="container5">
                                <img className="container4" src={HBClogo} alt="img" />
                                <h2 className="container6">Stock Manager</h2>
                            </div>
                        </Link>
                    </ul>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/stocks" component={Stocks} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navbar;