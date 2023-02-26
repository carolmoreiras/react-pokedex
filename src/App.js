import './App.css';
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import axios from 'axios';
import { Router } from "./routes/Router"
import { useEffect, useState } from 'react';

export const baseURL = "https://pokeapi.co/api/v2/"

const promisesUrl = Array.from({ length: 20 }, (_, i) => `${baseURL}pokemon/${i + 1}`)


function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    Promise.all(promisesUrl.map(url => axios.get(url)))
      .then(responses => setPokemonList(responses.map(response => response.data)))
      .catch(error => console.log(error))
  }, [])
 
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
