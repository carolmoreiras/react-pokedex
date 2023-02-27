import { useLocation } from "react-router-dom";
import { usePokemon } from "../../contexts/globalcontext";

export const PokemonDetailPage = () => {
  const { pokemonList } = usePokemon()
  const location = useLocation()

  const pokemon = pokemonList.find(pokemon =>
    pokemon.name === location.pathname.split("/")[2]
  )

  return (
    <div>
      {pokemon ? (
        <h1>{pokemon && pokemon.name}</h1>
      ): (
        <h1>Carregando...</h1>
      )}
    </div>

  )
}