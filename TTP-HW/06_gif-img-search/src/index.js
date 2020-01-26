import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Trend from './Trend';
import Random from './Random';
import NotFound from './NotFound';
import './index.css';

const routing = (
    <Router className="route">
      <div>
        <ul className="container">
          <li className="container">
            <Link className="route" to="/">GIF Regular Search</Link>        
          </li>
          <li className="container">
            <Link className="route" to="/trend">GIF Trending Search</Link>        
          </li>
          <li className="container">
          <Link className="route" to="/random">GIF Random Search</Link>        
          </li>
        </ul>
  
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/trend" component={Trend} />
          <Route path="/random" component={Random} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));