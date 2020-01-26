import React, {Component} from 'react';
import './City.css';

let city = '';

class City extends Component {
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

        this.setState({city : event.target.value.toUpperCase()});
    }

    myResetHandler = (event) => {
        window.location.reload(false);
    }

    myFetchHandler = (event) => {
        fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`)
        .then(function(resp) {
          return resp.json();
        }).then(function(data) {
            for(let i = 0; i < data.length; i++) {      
              let zipCode = document.createElement("h3");
              zipCode.id = "zipCode";
              zipCode.textContent = data[i];
              let div = document.getElementById("main-container");
              div.appendChild(zipCode);
            }
        })
        return null;
      }

    render() {
        city = this.state.city.toUpperCase();

        return (
            <div>
                <h1 id="textarea2">City Name Search</h1>
                <input id="textarea" type = "text" onChange={this.myChangeHandler} placeholder="Enter a City Name" />
                <button id="input" onClick={this.myFetchHandler}>Search</button>
                <button id="input" onClick={this.myResetHandler}>Reset</button>
            </div>
        );
    }
}

export default City;