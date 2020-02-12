

import React from "react";
import './App.css';
import MenuItem from './MenuItem';
const text4 = 'contact4';
const link4 = 'link4';


function Menu(props) {
    return(
        <div className="App-menu">
            <ul>
                {props.items.map(el => <MenuItem key={el.text} menuItem={el}/>)}
            </ul>
        </div>
    );
}
export default Menu;