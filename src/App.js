import React, { Component } from 'react';
import PokeList from './PokeList.js'
import Header from './Header.js'
import './App.css'
import request from 'superagent';

export default class App extends Component {

  state = {
    pokemon: [],
    search: ""
  }
  componentDidMount = async() => {
   const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?page=3&perPage=50')
   
  this.setState({pokemon: data.body.results})
   console.log(this.state.pokemon)
  }

  updateSearch(event) {
    //updates the search state based on user input and limits entry to 20 char
    this.setState({search: event.target.value.substr(0,20)})
    console.log(this.state.search)
  }
  render(){
   return (
     <div>
       <Header/>
       <div className="searchBar">
         <input placeholder="      search..." value={this.state.search} onChange={this.updateSearch.bind(this)}/>
       </div>
       <PokeList pokemonz={this.state.pokemon}/>
     </div>
   )
 }
}
