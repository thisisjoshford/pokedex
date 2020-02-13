import React, { Component } from "react";
import './PokeItem.css'
export default class PokeItem extends Component {

    render() {
        const pokemonArray = this.props.pokemon
        const pokemonElements = pokemonArray.map((obj) => {
        return <li className="pokemonContainer" key={obj.id}>
            <div id="pokeImage">
                <img className="pokeImages" src={obj.url_image} alt={obj.pokemon}/>
            </div>
            <div className="labelBox">
                <h3>{obj.pokemon.toUpperCase()}</h3>
                <p>Abillity: {obj.ability_1}</p>
                <a href={obj.pokedex}>Info</a>
            </div>
        </li>
        });
        return(
            pokemonElements
        );
    }
}