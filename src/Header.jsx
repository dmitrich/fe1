import React from "react";
import './App.css';
import Menu from './Menu';
import Logo2 from "./Logo";


function Header(props){
    return (
        <header>
            <div className="container">
                <Logo2/>
                <Menu items={props.items}/>
            </div>
        </header>
    );
}

export default Header;