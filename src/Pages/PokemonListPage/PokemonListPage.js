import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Phrase, PokemonListContainer, PokeCardContainer } from "../PokemonListPage/PokemonListStyle"

export const PokemonListPage = ({
  pokemonList
}) => {

  return (
    <PokemonListContainer>
      <Phrase>Todos Pokémons</Phrase>
      <div>

      </div>
      <PokeCardContainer>
        {pokemonList.length ?
          pokemonList.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
          : (
            <p>Loading...</p>
          )}
      </PokeCardContainer>
    </PokemonListContainer>
  )
}