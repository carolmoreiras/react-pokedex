import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Phrase, PokemonListContainer, PokeCardContainer } from "../PokemonListPage/PokemonListStyle"
import { usePokemon } from "../../contexts/globalcontext"
import {EmptyPokedex} from "../../Pages/PokeDexPage/PokeDexStyle"
import ImgPokedex from "../../Images/pokedex.png"

export const PokeDexPage = () => {
  const {
    pokeDex,
    removePokemonFromPokedex
  } = usePokemon()

  return (
    <PokemonListContainer>
      <Phrase>Pokédex</Phrase>
      <PokeCardContainer>
        {pokeDex.length ?
          pokeDex.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              removePokemonFromPokedex={removePokemonFromPokedex}
            />
          ))
          : (
            <div>
              <img src={ImgPokedex}/>
              {/* <EmptyPokedex>Pokédex Vazia</EmptyPokedex> */}
            </div>
          )}
      </PokeCardContainer>
    </PokemonListContainer>
  )
}