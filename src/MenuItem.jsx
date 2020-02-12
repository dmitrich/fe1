import React from 'react';
import './App.css';

function MenuItem(props){
    console.log(props);
    return(
       <li className="App-menu-item">
           <a href={props.menuItem.link}>{props.menuItem.text} </a>
       </li>
    );
}

export default MenuItem;