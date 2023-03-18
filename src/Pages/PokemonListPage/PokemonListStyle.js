import styled from "styled-components";
import PokemonFont from "../../fonts/POKEMON-SOLID.TTF"


export const Phrase = styled.p`
  @font-face {
    font-family: 'Pokemon Solid Regular';
    src: url(${PokemonFont});
    font-style: normal;
    font-weight: normal;
  }
  font-family: 'Pokemon Solid Regular';
  font-size: 36px;
  color: #3E5CB2;
  text-shadow: 3px 3px 2px rgba(255, 255, 42, 1),6px 6px 3px rgba(255, 19, 19, 0.78);
  margin-left: 20px;
  margin-bottom: 8px;
  `

export const PokemonListContainer = styled.div`
  margin: 0 32px;
  margin-bottom: 32px;
`

export const PokeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
`