import React, { Component } from 'react';
import PokeList from './PokeList.js'
import { getPokemon } from './renderPoke.js'
import Header from './Header.js'
import PageNavigation from './PageNavigation.js'
import './App.css'
import request from 'superagent';
import { wait } from '@testing-library/react';

export default class App extends Component {
  //create empty containers (variables) in state
  state = {
    pokemon: [],
    search: ""
  }

  //getting pokemon from api using getPokemon function... we use async/await because we are working with an api that has delay in returning results
  async loadPokemon() {
    //returns array of objects (count, page, perPage, sort, search, results) results contain array of pokemon objects
    const apiResponse = await getPokemon();
    console.log(apiResponse)
    //place the array of pokemon objects into pokemon variable
    const pokemon = apiResponse.results;
    //place the total count 
    const numberOfPokemon = apiResponse.count;
    //set state with above data
    this.setState({
      pokemon: pokemon,
      numberOfPokemon: numberOfPokemon
    }
    )
  }

  runSubmit = event => {
    event.preventDefault();

    const queryString = window.location.hash.slice(1);
    //anytime you see something new you are envoking something that takes data and construct new data
    const searchParams = new URLSearchParams(queryString);

    // searchParams.set("type", formData.get("type"));
    searchParams.set("pokemon", this.state.search);
    //reset to page 1 as this is new search and
    searchParams.set("page", 1);
    window.location.hash = searchParams.toString();
    console.log(window.location.hash)
  };

  componentDidMount = async() => {
    await this.loadPokemon();
      window.addEventListener('hashchange', async() => {
      await this.loadPokemon();
    })
  }

 
  //updates the search state based on user input and limits entry to 20 char
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
    console.log(this.state.search)
  }
  
  render(){

  const { numberOfPokemon, pokemon } = this.state;

   return (
     <div>
       <Header/>
       <div className="searchBar">
         <input placeholder="enter search..." value={this.state.search} onChange={this.updateSearch.bind(this)}/>
         <button onClick={this.runSubmit}>🔍</button>
       </div>
       <PokeList pokemonz={pokemon}/>
       <PageNavigation totalResults={numberOfPokemon}/>
       
     </div>
   )
 }
} 
