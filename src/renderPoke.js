//set the url to that of the api we are requesting data from... ? allows search functions
const URL = "https://alchemy-pokedex.herokuapp.com/api/pokedex?";

export async function getPokemon() {
  // make a copy of the window url minus the character to the left (# or ?)
  let queryString = window.location.hash.slice(1);
  // build a NEW url using base URL and concatenating it with the querytString
  const url = `${URL}${queryString}`;
  // send that url along to the fetch
  const response = await fetch(url);
  //convert or parse response from provided stringified data 
  const data = await response.json();
  return data;
}