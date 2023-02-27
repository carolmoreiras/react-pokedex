import { useNavigate, useLocation } from "react-router-dom";
import { CardContainer, Button, BgPokebola, DetailsGotcha, ImgPokeCard, ContainerType, ButtonDetails } from './PokemonCardStyle'
import { TypeCard } from '../TypeCard/TypeCard'
import Pokebola from '../../Icons/pokebola.svg'

const checkType = (types, typeToCheck) => {
  return types.filter(type => type.type.name === typeToCheck).length > 0
}

export const PokemonCard = ({
  pokemon,
  addPokemonToPokedex,
  removePokemonFromPokedex
}) => {

  const backGroundCard = () => {
    if (checkType(pokemon.types, "grass")) return "#729F92"
    if (checkType(pokemon.types, "fire")) return "#EAAB7D"
    if (checkType(pokemon.types, "water")) return "#71C3FF"
    if (checkType(pokemon.types, "bug")) return "#76A866"
    if (checkType(pokemon.types, "normal")) return "#BF9762"

  }

  const location = useLocation()


  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/pokemon/${pokemon.name}`)
  }


  return (
    <CardContainer style={{ backgroundColor: backGroundCard() }}>
      <div>
        <p>#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <ContainerType>
          {pokemon.types.map(type => (
            <TypeCard key={type.slot} type={type.type.name} />
          ))}
        </ContainerType>
      </div>
      <BgPokebola src={Pokebola} />
      <ImgPokeCard src={pokemon.sprites.other["official-artwork"].front_default} />
      <DetailsGotcha>
        <ButtonDetails onClick={goToDetails}>Detalhes</ButtonDetails>
        {location.pathname === "/pokedex" ? (
          <Button onClick={() => removePokemonFromPokedex(pokemon)}>Excluir</Button>

        ) : (
          <Button onClick={() => addPokemonToPokedex(pokemon)}>Capturar!</Button>
        )}
      </DetailsGotcha>

    </CardContainer>
  )
}