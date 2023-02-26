import React from "react";
import { HeaderContainer } from './styles'
import LogoImg from '../../Images/logo-pokemon.png'


export const Header = () => {
  return (
      <HeaderContainer>
         <img src={LogoImg} alt='Logo Pokémon'/>
         <button>Pokédex</button>
      </HeaderContainer>
  )
}