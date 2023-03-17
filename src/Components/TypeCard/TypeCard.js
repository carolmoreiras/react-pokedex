import Poison from '../../Icons/poison.svg'
import Grass from '../../Icons/grass.svg'
import Fire from '../../Icons/fire.svg'
import Flying from '../../Icons/flying.svg'
import Water from '../../Icons/water.svg'
import Bug from '../../Icons/bug.svg'
import Normal from '../../Icons/normal.svg'
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
    fire: {
      icon: Fire, 
      backgroundColor: "#F44900",
      label: "Fire",
    },
    flying: {
      icon: Flying, 
      backgroundColor: "#6892B0",
      label: "Flying",
    },
    water: {
      icon: Water, 
      backgroundColor: "#33A4F5",
      label: "Water",
    },
    bug: {
      icon: Bug, 
      backgroundColor: "#316520",
      label: "Bug",
    },
    normal: {
      icon: Normal, 
      backgroundColor: "#8A8A8A",
      label: "Normal",
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