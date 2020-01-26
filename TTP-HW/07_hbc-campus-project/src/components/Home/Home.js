import React, { Component } from 'react';
import HBClogo from '../../src/img/HBClogo.png';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <header className="Background">
                <div className="div">
                    <div className="div2">
                        <img className="logoSize" src={HBClogo} />   
                        <h2>Campus Manager</h2>
                        <p className="textSize">Made by Chanyu C. | Chris E. | Cherena B. | Elvis O.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;