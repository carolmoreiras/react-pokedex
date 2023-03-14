import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, ButtonBackToPoke, ButtonHeader, ButtonRemovePoke, ContainerAudio } from './styles'
import LogoImg from '../../Images/logo-pokemon.png'
import { usePokemon } from "../../contexts/globalcontext";
import PokemonMp3 from "../../Music/Pokemon.mp3"

export const Header = () => {
  const {
    pokeDex,
    pokemonList,
    removePokemonFromPokedex,
    addPokemonToPokedex
  } = usePokemon()

  const location = useLocation()

  const navigate = useNavigate()

  const goToPokeDex = () => {
    navigate("/pokedex")
  }

  const goToPokeList = () => {
    navigate("/")
  }

  const pokemonOnURL = location.pathname.split("/")[2]

  const isPokemonOnPokedex = pokeDex.filter(pokemon =>
    pokemon.name === pokemonOnURL
  ).length > 0

  const findPokemon = (pokemonName, arrayToSearch) => {
    return arrayToSearch.find(pokemon => pokemon.name === pokemonName)
  }

  return (
    <HeaderContainer>

      <img src={LogoImg} alt='Logo Pokémon' />
      {location.pathname !== "/" && (
        <ButtonBackToPoke onClick={goToPokeList}>
          {"< Voltar para Todos Pokémons"}
        </ButtonBackToPoke>
      )}
      {location.pathname === "/" && (
        <>
          <ContainerAudio src={PokemonMp3} controls></ContainerAudio>
          <ButtonHeader onClick={goToPokeDex}>Pokédex</ButtonHeader>
        </>
      )}
      {location.pathname.includes("/pokemon") && (
        isPokemonOnPokedex ? (
          <ButtonRemovePoke
            onClick={() => removePokemonFromPokedex(findPokemon(pokemonOnURL, pokeDex))}
          >
            Excluir da Pokédex
          </ButtonRemovePoke>
        ) : (
          <ButtonRemovePoke
            onClick={() => addPokemonToPokedex(findPokemon(pokemonOnURL, pokemonList))}
          >
            Adicionar à Pokédex
          </ButtonRemovePoke>
        )
      )}
    </HeaderContainer>
  )
}