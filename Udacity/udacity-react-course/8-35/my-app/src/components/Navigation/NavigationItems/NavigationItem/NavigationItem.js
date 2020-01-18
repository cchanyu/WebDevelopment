import React from 'react';

import './NavigationItem.css'

const navigationItem = (props) => (
    <li className="NavigationItem">
        <a 
            href={props.link} 
            className="active"/*or null*/>{props.children}</a>
    </li>
);

export default navigationItem;