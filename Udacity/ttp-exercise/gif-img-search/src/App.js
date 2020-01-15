import React, { Component } from 'react';
import Search from './Search';
import './App.css';

const API = 'fpWVBt2icga41IQMyals5bVd6c2eLQKm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      url: []
    }
  }

  myChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  }

  myResetHandler = (event) => {
    window.location.reload(false);
  }

  myFetchHandler = (event) => {
    event.preventDefault();

    const input = this.state.text.toUpperCase();
    console.log(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${API}`);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${API}`)
      .then((response) => {
        console.log(response.data);
        return response.json()
      }).then((data)=>{
        console.log(data.data);
        this.setState({
          url: data.data
        });
        return null;
      })
  }

  render() {
    const images = this.state.url.map((i) => <Search i={i}/>)
    return (
      <form className = "center" onSubmit={this.mySubmitHandler}>
        <h1 id="textarea2" className = "center">GIF Regular Search</h1>
        <input id="textarea" type="text" onChange={this.myChangeHandler} placeholder="Enter a keyword" />
        <button id="input" onClick={this.myFetchHandler}>Search</button>
        <button id="input" onClick={this.myResetHandler}>Reset</button>
        {images}
      </form>
    );
  }
}

export default App;