import { CardContainer, Button, BgPokebola, DetailsGotcha, ImgPokeCard } from './PokemonCardStyle'
import Poison from '../../Icons/poison.svg'
import Grass from '../../Icons/grass.svg'
import Pokebola from '../../Icons/pokebola.svg'


export const PokemonCard = () => {
  return (
    <CardContainer>
      <div>
        <p>#01</p>
        <h1>Bulbasaur</h1>
        <div>
          <img src={Poison} />
          <img src={Grass} />
        </div>
      </div>
      <BgPokebola src={Pokebola} />
        <ImgPokeCard src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      <DetailsGotcha>
        <p>Detalhes</p>
        <Button>Capturar!</Button>
      </DetailsGotcha>
    </CardContainer>
  )
}