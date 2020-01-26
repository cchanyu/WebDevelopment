import React, { Component } from 'react';
import Search from './Search';
import '../css/Stocks.css'
import Axios from 'axios';

// const API = 'V6S3fcLVKznuqr59ufQI57hmyBsYWc2sWa38U2ySPGi3D7GTuYQArQTqQG0K';

class Stocks extends Component {
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

  getChange = (event) => {
    this.setState({ text: event.target.value });
  }
 // Gets user information to display the current user balance based on the user id
  getUserInfo = () => {
    Axios.get('', )
  }

  // getStocks = (event) => {
  //   event.preventDefault();

  //   const input = this.state.text.toUpperCase();
  //   console.log(`https://api.worldtradingdata.com/api/v1/stock_search?search_term=${this.state.text}&limit=50&page=1&api_token=${API}`);
  //   // https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=${API}
  //   fetch(`https://api.worldtradingdata.com/api/v1/stock_search?search_term=${this.state.text}&limit=50&page=1&api_token=${API}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.json()
  //     }).then((data)=>{
  //       console.log(data.data);
  //       console.log(data.data[0].symbol);
  //       console.log(data.data[0].price);
  //       this.setState({
  //         stocks: data.data
  //       });
  //       return null;
  //     })
  // }

  // <div className="stocks004">
  // <input className="stocks005" type="text" onChange={this.getChange} placeholder="Enter a keyword" />
  // <input className="stocks003" type="submit" onClick={this.getStocks} value="Generate"></input>
  // </div>


  componentDidMount() {
    this.getStocks2();
  }

  getStocks2 = () => {
    fetch('http://localhost:3007/stocks')
      .then(data => data.json())
      .then(data => {
        console.log(this.state.stocks);
        this.setState({ stocks: data })
      })
  }

  render() {
    const stocksReturn = this.state.stocks.map((i) => <Search i={i} />)
    return (
      <div className="stocks007">
        <div className="stocks006">
          <div className="stocks002">
            <h1 className="stocks001">Welcome {this.state.username}</h1>
            <h1 className="stocks008">Buy Stocks</h1>
            <h1 className="stocks001">Balance: ${this.state.balance}</h1>
          </div>
          <div className="search003">
            {stocksReturn}
          </div>
        </div>
      </div>
    )
  }
}

export default Stocks;