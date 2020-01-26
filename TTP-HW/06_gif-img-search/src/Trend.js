import React, { Component } from 'react';
import Search from './Search';
import './App.css';

const API = 'fpWVBt2icga41IQMyals5bVd6c2eLQKm';

class Trend extends Component {
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

        console.log(`http://api.giphy.com/v1/gifs/trending?api_key=${API}`);
        fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API}`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data.data);
                this.setState({
                    url: data.data
                });
                return null;
            })
    }

    render() {
        const images = this.state.url.map((i) => <Search i={i} />)
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1 id="textarea2">GIF Trending Search</h1>
                <button id="input" onClick={this.myFetchHandler}>Generate</button>
                <button id="input" onClick={this.myResetHandler}>Reset</button>
                {images}
            </form>
        )
    }
}

export default Trend;