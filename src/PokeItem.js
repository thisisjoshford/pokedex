import React, { Component } from "react";

export default class PokeItem extends Component {

    render() {
        const pokemonArray = this.props.pokemon
        const pokemonElements = pokemonArray.map((object, i) => {
        return <li className="pokemonContainer" key={i}>
            <img src={object.url_image} alt={object.title}/>
        </li>
        });
        return(
            pokemonElements
        );
    }
}