import React from "react";
import { Logo } from './styles'
import LogoImg from '../../Images/logo-pokemon.png'


export const Header = () => {
  return (
      <Logo>
         <img src={LogoImg} alt='Logo Pokémon'/>
         <button>Pokédex</button>
      </Logo>
  )
}