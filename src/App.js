import React, { Component } from 'react';
import PokeList from './PokeList.js'
import request from 'superagent';

export default class App extends Component {

  state = {
    pokemon: []
  }
  
  componentDidMount = async() => {
   const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
   
   this.setState({pokemon: data.body.results})
   console.log(data.body)
  }
  render(){
   return (

     <div>
       <PokeList pokemons={this.state.pokemon}/>
     </div>
   )
 }
}
