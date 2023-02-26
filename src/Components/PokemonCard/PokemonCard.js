import { CardContainer, Button, BgPokebola, DetailsGotcha, ImgPokeCard, ContainerType, } from './PokemonCardStyle'
import { TypeCard } from '../TypeCard/TypeCard'
import Pokebola from '../../Icons/pokebola.svg'


export const PokemonCard = ({
  pokemon
}) => {
  return (
    <div>
      <CardContainer>
        <div>
          <p>#{pokemon.id}</p>
          <h1>{pokemon.name}</h1>
          <ContainerType>
            {pokemon.types.map(type => (
              <TypeCard key={type.slot} type={type.type.name} />
            ))}
          </ContainerType>
        </div>
        <BgPokebola src={Pokebola} />
        <ImgPokeCard src={pokemon.sprites.other["official-artwork"].front_default} />
        <DetailsGotcha>
          <p>Detalhes</p>
          <Button>Capturar!</Button>
        </DetailsGotcha>

      </CardContainer>
    </div>
  )
}