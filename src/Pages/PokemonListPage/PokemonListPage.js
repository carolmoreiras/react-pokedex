import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Phrase, PokemonListContainer, PokeCardContainer } from "../PokemonListPage/PokemonListStyle"
import { usePokemon } from "../../contexts/globalcontext"
import { Modal } from "../../Components/Modal/Modal"


export const PokemonListPage = () => {
  const {
    pokemonList,
    addPokemonToPokedex
  } = usePokemon()

  return (
    <PokemonListContainer>
      <Phrase>Todos Pokémons</Phrase>
      <div>

      </div>
      <PokeCardContainer>
        {pokemonList.length ?
          pokemonList.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              addPokemonToPokedex={addPokemonToPokedex}
            />
          ))
          : (
            <p>Loading...</p>
          )}
      </PokeCardContainer>
    </PokemonListContainer>
  )
}