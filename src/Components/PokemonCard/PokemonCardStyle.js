import styled from "styled-components";
import AshCursor from "../../Icons/ash_cursor.png"
import PokebolaCursor from "../../Icons/pokebola_cursor.png"
import RemovePokeCursor from "../../Icons/remove_pokemon.png"



export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 210px;
  background: #729F92;
  border-radius: 12px;
  padding: 16px;
  margin-top: 40px;

  p{
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 700;
  }
`
export const ButtonDetails = styled.button`
  font-family: 'Inter';
  color: white;
  text-decoration: underline 1.5px;
  text-underline-position: under;
  text-decoration-color: #f5f5f5;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: url(${AshCursor}), pointer;
`

export const ButtonCapturar = styled.button`
  height: 38px;
  width: 146px;
  left: 249px;
  border-radius: 8px;
  border: none;
  color: #0F0F0F;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  background-color: white;
  cursor: url(${PokebolaCursor}), pointer;
  transition: all 0.3s ease;
  :hover{
    box-shadow: rgba(64, 64, 64, 0.17) 0px -23px 25px 0px inset, rgba(64, 64, 64, 0.15) 0px -36px 30px 0px inset, rgba(64, 64, 64, 0.1) 0px -79px 40px 0px inset, rgba(64, 64, 64, 0.06) 0px 2px 1px, rgba(64, 64, 64, 0.09) 0px 4px 2px, rgba(64, 64, 64, 0.09) 0px 8px 4px, rgba(64, 64, 64, 0.09) 0px 16px 8px, rgba(64, 64, 64, 0.09) 0px 32px 16px;
  }
`
export const ButtonExcluir = styled.button`
  height: 38px;
  width: 146px;
  left: 249px;
  border-radius: 8px;
  border: none;
  color: #0F0F0F;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  background-color: white;
  cursor: url(${RemovePokeCursor}), pointer;
  transition: all 0.3s ease;
  :hover{
    box-shadow: rgba(64, 64, 64, 0.17) 0px -23px 25px 0px inset, rgba(64, 64, 64, 0.15) 0px -36px 30px 0px inset, rgba(64, 64, 64, 0.1) 0px -79px 40px 0px inset, rgba(64, 64, 64, 0.06) 0px 2px 1px, rgba(64, 64, 64, 0.09) 0px 4px 2px, rgba(64, 64, 64, 0.09) 0px 8px 4px, rgba(64, 64, 64, 0.09) 0px 16px 8px, rgba(64, 64, 64, 0.09) 0px 32px 16px;
  }
`


export const BgPokebola = styled.img`
  position: absolute;
  width: 236px;
  right: 0;
  top: 0;
`
export const ImgPokeCard = styled.img`
  position: absolute;
  width: 200px;
  right: 0;
  top: -62px;
  z-index: 10;
`

export const DetailsGotcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;

  p{
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 700;
    text-decoration: underline;
    color: white; 
  }

`

export const ContainerType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: static;

`

