import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, ButtonBackToPoke, ButtonHeader, ButtonRemovePoke } from './styles'
import LogoImg from '../../Images/logo-pokemon.png'
import { usePokemon } from "../../contexts/globalcontext";

export const Header = () => {
  const {
    pokeDex,
    removePokemonFromPokedex
  } = usePokemon()

  const location = useLocation()

  const navigate = useNavigate()

  const goToPokeDex = () => {
    navigate("/pokedex")
  }

  const goToPokeList = () => {
    navigate("/")
  }

  const isPokemonOnPokedex = pokeDex.filter(pokemon =>
      pokemon.name === location.pathname.split("/")[2]
    ).length > 0

  const pokemonToRemove = pokeDex.find(pokemon =>
    pokemon.name === location.pathname.split("/")[2]
  )

  return (
    <HeaderContainer>
      <img src={LogoImg} alt='Logo Pokémon' />
      {location.pathname !== "/" && (
        <ButtonBackToPoke onClick={goToPokeList}>{"< Voltar para Todos Pokémons"}</ButtonBackToPoke>
      )}
      {location.pathname === "/" && (
        <ButtonHeader onClick={goToPokeDex}>Pokédex</ButtonHeader>
      )}
      {location.pathname.includes("/pokemon") && (
        <ButtonRemovePoke
          disabled={!isPokemonOnPokedex}
          onClick={() => removePokemonFromPokedex(pokemonToRemove)}>Remover Pokémon</ButtonRemovePoke>
      )}
    </HeaderContainer>
  )
}