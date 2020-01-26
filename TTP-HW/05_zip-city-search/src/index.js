import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import City from './City';
import App from './App';
import NotFound from './NotFound';
import './index.css';

const routing = (
    <Router id="route">
      <div>
        <ul className="container">
          <li className="container">
            <Link id="route" to="/">Zip Search</Link>        
          </li>
          <li className="container">
            <Link id="route" to="/city">City Search</Link>        
          </li>
        </ul>
  
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/city" component={City} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));