import React, { Component } from 'react';
import Search from './Search';
import './App.css';

const API = 'fpWVBt2icga41IQMyals5bVd6c2eLQKm';

class Random extends Component {
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

        console.log(`http://api.giphy.com/v1/gifs/random?api_key=${API}`);
        fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API}`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data.data.images);
                console.log(data.data.url);
                this.setState({
                    url: data.data.images.original.url
                });
                return null;
            })
    }

    render() {
        const images = this.state.url;
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1 id="textarea2">GIF Random Search</h1>
                <button id="input" onClick={this.myFetchHandler}>Generate</button>
                <button id="input" onClick={this.myResetHandler}>Reset</button>
                <br></br>
                <img src={images} alt="" />
            </form>
        )
    }
}

export default Random;