import {
  Phrase,
  CardContainer,
  BgPokebola,
  ContainerPokes,
  ImgPokemon,
  ContainerType,
  ContainerMoves,
  ContainerImgsPokes,
  ContainerBaseStats,
  PokeGif,
  LeftContainer,
  RightContainer,
  StatBar,
  InnerBar,
  Stats,
  StatName,
  StatNumber
} from "./PokemonDetailsStyle"
import Pokebola from '../../Icons/pokebola.svg'
import { useLocation } from "react-router-dom";
import { usePokemon } from "../../contexts/globalcontext";
import { TypeCard } from "../../Components/TypeCard/TypeCard";


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
          <LeftContainer>
            <ContainerImgsPokes>
              <ContainerPokes>
                <PokeGif src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
              </ContainerPokes>
              <ContainerPokes>
                <PokeGif src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default} />
              </ContainerPokes>
            </ContainerImgsPokes>
            <ContainerBaseStats>
              <h2>Base stats</h2>
              {pokemon.stats.map(stat => (
                <Stats>
                  <StatName>{stat.stat.name}</StatName>
                  <StatNumber>{stat.base_stat}</StatNumber>
                  <StatBar>
                    <InnerBar style={{width: `${stat.base_stat}px`}}>
                      
                    </InnerBar>
                  </StatBar>
                </Stats>
              ))}
              <Stats>
                  <StatName>Total</StatName>
                  <StatNumber>{pokemon.stats.reduce(
                    (total, stat) => total + stat.base_stat, 0
                  )}</StatNumber>
                </Stats>
            </ContainerBaseStats>
          </LeftContainer>
          <RightContainer>
            <div>
              <p>#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <ContainerType>
                {pokemon.types.map(type => (
                  <TypeCard key={type.slot} type={type.type.name} />
                ))}
              </ContainerType>
            </div>
            <ContainerMoves>
              <h2>Moves:</h2>
              <p>{pokemon.moves[0].move.name} </p>
              <p>{pokemon.moves[1].move.name} </p>
              <p>{pokemon.moves[2].move.name}</p>
              <p>{pokemon.moves[3].move.name}</p>
            </ContainerMoves>
          </RightContainer>
        </CardContainer>
      ) : (
        <h1>Carregando...</h1>
      )}

    </div>
  )
}