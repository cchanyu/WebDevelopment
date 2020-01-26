import React from 'react';
import '../css/Search.css'

function Search(props) {

    const [state, setState] = React.useState({
        text: '',
        stockid: ''
    })

    function handleChange(e) {
        setState({ text: e.target.value });
    }
    
    function target() {
        //We're going to fire the post request here
        state.stockid = props.i.stockid;

        console.log(state.stockid);
        console.log(state.text);
    }

    return (
        <div className="search002">
            <div className="search001">
                <div>
                    <h2>{props.i.name}</h2>
                    <h3>Price: ${props.i.price} USD</h3>
                    <div className="search003">
                        <input className="search004" name="amount" type="number" min ="1" onChange={handleChange} placeholder="Enter the amount"></input>
                        <input className="container006" type="submit" value="Buy" onClick={target}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;