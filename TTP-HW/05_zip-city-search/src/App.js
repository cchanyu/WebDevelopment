import React, {Component} from 'react';
import './App.css';

let zipCode = '';

class App extends Component {
  state = {
    zipcode: '',
    searched: [],
    city: '',
    state: [],
    showResult: false
  }

  constructor(props) {
    super(props);
  }

  myChangeHandler = (event) => {
    document.getElementById('main-container').remove();
    let div = document.createElement("div");
    div.id = "main-container";
    let r00t = document.getElementById('root');
    r00t.appendChild(div);
    
    this.setState({zipcode : event.target.value});
  }

  myResetHandler = (event) => {
    window.location.reload(false);
  }

  myFetchHandler = (event) => {
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`)
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
      let arr = [];
      for(let i = 0; i < data.length; i++) {
        console.log(data[i].City);
        let ans = data[i].City;
        arr.push(ans);

        let cityName = document.createElement("h3");
        cityName.id = "cityName";
        cityName.textContent = data[i].City + ", " + data[i].State;
        let div = document.getElementById("main-container");
        div.appendChild(cityName);
      }
    })
    return null;
  }

  render() {
    zipCode = this.state.zipcode;

    return (
      <div>
          <h1 id="textarea2">Zip Code Search</h1>
          <input id="textarea" type = "text" onChange={this.myChangeHandler} placeholder="Enter a Zipcode" />
          <button id="input" onClick={this.myFetchHandler}>Search</button>
          <button id="input" onClick={this.myResetHandler}>Reset</button>
        </div>
      );
  }
}

export default App;
