import React from "react";
import './App.css';
import Menu from "./Menu";

function Footer(props){
    return (
        <div className="container">
            <Menu items={props.items}/>
        </div>
    );
}

export default Footer;