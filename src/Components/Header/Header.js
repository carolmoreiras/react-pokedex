import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, ButtonBackToPoke, ButtonHeader, ButtonRemovePoke, ContainerAudio } from './styles'
import LogoImg from '../../Images/logo-pokemon.png'
import { usePokemon } from "../../contexts/globalcontext";
import PokemonMp3 from "../../Music/Pokemon.mp3"
import { Modal } from "../Modal/Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export const Header = () => {
  const {
    pokeDex,
    pokemonList,
    removePokemonFromPokedex,
    addPokemonToPokedex
  } = usePokemon()

  const [modalMessage, setModalMessage] = useState({})

  const { isOpen, onClose, onOpen } = useDisclosure()

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

  const mutatePokemon = (pokemon, action) => {
    let modalMessage

    if (action === 'add') {
      modalMessage = addPokemonToPokedex(pokemon)
    } else {
      modalMessage = removePokemonFromPokedex(pokemon)
    }
    
    setModalMessage(modalMessage)

    setTimeout(() => {
      onClose()
    }, 1500);

    onOpen()
  }

  return (
    <HeaderContainer>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalMessage={modalMessage.message}
        modalTitle={modalMessage.title}
      />
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
            onClick={() => mutatePokemon(findPokemon(pokemonOnURL, pokeDex), "remove")}
          >
            Excluir da Pokédex
          </ButtonRemovePoke>
        ) : (
          <ButtonRemovePoke
            onClick={() => mutatePokemon(findPokemon(pokemonOnURL, pokemonList), "add")}
          >
            Adicionar à Pokédex
          </ButtonRemovePoke>
        )
      )}
    </HeaderContainer>
  )
}