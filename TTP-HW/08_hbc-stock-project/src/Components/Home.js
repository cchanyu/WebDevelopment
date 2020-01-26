import React, { Component } from 'react';
import HBClogo from '../Images/HBClogo.png';

import '../css/Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    // componentDidUpdate({

    // });

    render() {
        return (
            <header className="Background">
                <div className="div">
                    <div className="div2">
                        <img className="logoSize" src={HBClogo} alt="img" />   
                        <h2>Stock Manager</h2>
                        <p className="textSize">Made by Chanyu C. | Chris E. | Cherena B. | Elvis O.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;