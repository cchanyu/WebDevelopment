import React, { Component } from 'react';
import Navbar from './Navigation/navbar'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default App;
