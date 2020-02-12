import React from "react";
import './App.css';
import Menu from './Menu';
import Content from "./Content";


function Header(props){
    return (
        <header>
            <div className="App-header">
               <Menu items={props.items}/>
            </div>
        </header>
    );
}

export default Header;