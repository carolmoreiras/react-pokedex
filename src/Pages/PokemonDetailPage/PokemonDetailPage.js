import { Phrase, CardContainer, BgPokebola, ContainerPokes, ImgPokemon, ContainerType, ContainerMoves, ContainerImgsPokes, ContainerBaseStats, } from "./PokemonDetailsStyle"
import Pokebola from '../../Icons/pokebola.svg'
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
      <Phrase>Detalhes</Phrase>
      {pokemon ? (
        <CardContainer>
          <ImgPokemon src={pokemon.sprites.other["official-artwork"].front_default} />
          <BgPokebola src={Pokebola} />
          <ContainerImgsPokes>
            <ContainerPokes src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
            <ContainerPokes src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default} />
          </ContainerImgsPokes>
          <ContainerBaseStats>
            <h2>Base stats</h2>
            {pokemon.stats.map(stat => (
              <p>{stat.stat.name} {stat.base_stat}</p>

            ))}
          </ContainerBaseStats>
          <div>
            <div>
              <p>#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            </div>
            <ContainerMoves>
              <h2>Moves:</h2>
              <p>{pokemon.moves[0].move.name} </p>
              <p>{pokemon.moves[1].move.name} </p>
              <p>{pokemon.moves[2].move.name}</p>
              <p>{pokemon.moves[3].move.name}</p>
            </ContainerMoves>
          </div>
        </CardContainer>
      ) : (
        <h1>Carregando...</h1>
      )}

    </div>
  )
}