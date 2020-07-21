import React from 'react';
import PokeList from './PokeList.js';
import renderer from 'react-test-renderer';



it('header renders correctly', () => {
  
  const pokemonArray = [{
    "_id": "5cef3501ef6005a77cd4fd18",
    "pokemon": "venusaur-mega",
    "id": 4,
    "species_id": 3,
    "height": 24,
    "weight": 1555,
    "base_experience": 281,
    "type_1": "grass",
    "type_2": "poison",
    "attack": 100,
    "defense": 123,
    "hp": 80,
    "special_attack": 122,
    "special_defense": 120,
    "speed": 80,
    "ability_1": "thick-fat",
    "ability_2": "NA",
    "ability_hidden": "NA",
    "color_1": "#78C850",
    "color_2": "#A040A0",
    "color_f": "#81A763",
    "egg_group_1": "monster",
    "egg_group_2": "plant",
    "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
    "generation_id": "NA",
    "evolves_from_species_id": "NA",
    "evolution_chain_id": "NA",
    "shape_id": "NA",
    "shape": "NA",
    "pokebase": "venusaur",
    "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
    },]
    const tree = renderer
    .create(<PokeList pokemonz={pokemonArray} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});