import React, { Component } from "react";
import './Header.css'
export default class Header extends Component {

    render() {
        return(
            <div className="headerLogo">
                <img className="mainLogo" src="mainLogo.png" alt="pokemon"/>
            </div>
        );
    }
}