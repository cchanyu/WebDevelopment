
import React, {Component} from 'react';
import axios from 'axios'


import '../css/Portfolio.css'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
      password: '',
      balance: '10,000',
      text: '',
      stocks: [],
      id: []
    }
  }


  createPortfolio = (event) => {

  }

  async componentDidMount() {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        "x-access-token": token
      }
    }
    const req = await axios.get('http://localhost:3007/user/', config)
    const data = req.data
    console.log(data)
  }

  render() {
    return (
      <div className="stocks007">
        <div className="stocks006">
          <div className="stocks002">
            <h1 className="stocks001">Welcome {this.state.username}</h1>
            <h1 className="stocks008">Sell Stocks</h1>
            <h1 className="stocks001">Balance: ${this.state.balance}</h1>
          </div>
          <div className="search003">
            <h1 className="portfolio001">You don't own any stocks.</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio