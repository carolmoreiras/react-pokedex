import Poison from '../../Icons/poison.svg'
import Grass from '../../Icons/grass.svg'
import {BgType} from './TypeCardStyle'

export const TypeCard = ({
  type
}) => {

  const types = {
    poison: {
      icon: Poison, 
      backgroundColor: "#AD61AE",
      label: "Poison",
    },
    grass: {
      icon: Grass, 
      backgroundColor: "#70B873",
      label: "Grass",
    },
    

  }

  return (
    <BgType style={{backgroundColor: types[type].backgroundColor}}>
      <img src={types[type].icon} />
      <span>
        {types[type].label}
      </span>
    </BgType>

  )
} 