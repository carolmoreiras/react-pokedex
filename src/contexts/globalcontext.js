import { createContext, useContext } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const baseURL = "https://pokeapi.co/api/v2/"

const promisesUrl = Array.from({ length: 21 }, (_, i) => `${baseURL}pokemon/${i + 1}`)

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokeDex, setPokeDex] = useState([])

  useEffect(() => {
    Promise.all(promisesUrl.map(url => axios.get(url)))
      .then(responses => setPokemonList(responses.map(response => response.data)))
      .catch(error => console.log(error))
  }, [])

  const addPokemonToPokedex = (pokemon) => {
    setPokeDex(previousState => [...previousState, pokemon])
    alert(`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} foi adicionado á Podédex!`)
  }

  const removePokemonFromPokedex = (pokemonToRemove) => {
    const filteredPokedex = pokeDex.filter(pokemon => pokemon.id !== pokemonToRemove.id)
    setPokeDex(filteredPokedex)
    alert(`${pokemonToRemove.name.charAt(0).toUpperCase() + pokemonToRemove.name.slice(1)} foi removido da Podédex!`)
  }


  return(
    <GlobalContext.Provider value={{
      pokemonList,
      pokeDex,
      addPokemonToPokedex,
      removePokemonFromPokedex
    }}>
      {children}
    </GlobalContext.Provider>
  )
} 

export const usePokemon = () => useContext(GlobalContext) 