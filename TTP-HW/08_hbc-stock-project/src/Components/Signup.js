import React, { Component } from 'react';

import '../css/Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  addAccount(event) {
    event.preventDefault();
      let data = {
        username: this.refs.username.value,
        password: this.refs.password.value
      };
      var request = new Request('http://localhost:3007/signup/', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
      });
      fetch(request).then(function (response) {
        response.json().then(function (data) {
          console.log(data)
        })
      })
      window.location.replace('http://localhost:3000/login'); 
  }

  render() {
    return (
      <div className="container000">
        <div className="container001">
          <div className="container002">
            <form className="container003" action="" method="POST">

              <div className="container007">
                <h1 className="container008">Sign up</h1>
              </div>

              <div className="container007">
                <h2 className="container004">Username: </h2>
                <input className="container005" type="text" placeholder="Enter username" ref="username" required />
              </div>

              <div className="container007">
                <h2 className="container004">Password:</h2>
                <input className="container005" type="password" placeholder="Enter password" ref="password" minLength="6" maxLength="15" required />
              </div>

              <input className="container006" type="submit" value="Create Account" onClick={this.addAccount.bind(this)}></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;