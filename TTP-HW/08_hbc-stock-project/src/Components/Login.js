import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userid: [],
      user: []
    }
  }

  async useLogin(event) {
    event.preventDefault();
    let data = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    
    try {
      const req = await axios.post('http://localhost:3007/login/', {
        username: data.username,
        password: data.password
      })
      const {token} = await req.data
      localStorage.setItem('token', token)
      
      window.location.replace(`http://localhost:3000/portfolio`);
      
      
    } catch(error) {
      alert('Wrong Username or Password');
    }

  }

  render() {

    return (
      <div className="container000">
        <div className="container001">
          <div className="container002">
            <form className="container003" action="" method="POST">

              <div className="container007">
                <h1 className="container008">Login</h1>
              </div>

              <div className="container007">
                <h2 className="container004">Username:</h2>
                <input className="container005" ref="username" type="text" />
              </div>

              <div className="container007">
                <h2 className="container004">Password:</h2>
                <input className="container005" ref="password" type="password" />
              </div>

              <input className="container006" type="submit" value="Log in" onClick={this.useLogin.bind(this)}></input>

              <h4 className="login002">Forgot your password? </h4>
              <h3 className="login001">Don't have an account? <Link to="/signup" className="link">Create an account</Link></h3>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default Login;