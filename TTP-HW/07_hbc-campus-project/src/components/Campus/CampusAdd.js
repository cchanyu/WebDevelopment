import React, { Component } from 'react';

import './CampusAdd.css';
import axios from './campus-bk';
import { Link } from 'react-router-dom';

class CampusAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    addCampus(event) {
        event.preventDefault();
        let data = {
            name: this.refs.name.value
        };
        var request = new Request('http://localhost:3001/campus/add',{
            method: 'POST',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify(data)
        });
        fetch(request).then(function(response) {
            response.json().then(function(data){
                console.log(data)
            })
        })
    }

    addCampus2(event){
        const send = {
            campus: {
                name: this.refs.name.value,
                imgurl: '',
                address: '',
                description: ''
            }
        }
        axios.post('/addCampus.json', send)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <header className="Background">
                <div className="center1">
                    <form className="center2">
                        <h2 className="item3">Add a New Campus</h2>
                        <input className="item1" placeholder="Campus Name" ref="name" required></input>
                        <Link to="/Campus"><button className="item2 Button" onClick={this.addCampus2.bind(this)}>Add Campus</button></Link>
                    </form>
                </div>
            </header>
        )
    }
}

export default CampusAdd;