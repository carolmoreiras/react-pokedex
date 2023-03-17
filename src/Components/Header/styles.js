import styled from 'styled-components'
import AshCursor from "../../Icons/ash_cursor.png"
import RemovePokeCursor from "../../Icons/remove_pokemon.png"


export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: rgb(254,38,38);
 background: linear-gradient(0deg, rgba(254,38,38,1) 0%, rgba(196,38,38,0.9108018207282913) 0%, rgba(212,40,40,1) 11%, rgba(218,50,50,1) 24%, rgba(237,55,55,1) 41%, rgba(230,55,55,1) 56%, rgba(224,54,54,1) 67%, rgba(219,54,54,1) 88%, rgba(219,57,57,1) 100%);
  
  img{
  width: 307px;
  height: 300px;
  
  }

`
export const ContainerAudio = styled.audio`
  position: absolute;
  left: 32px;
`

export const ButtonHeader = styled.button`
  position: absolute;
  right: 32px;
  color: white;
  padding: 4px 10px;
  width: 240px;
  height: 60px;
  background: #33A4F5;
  border-radius: 8px;
  border: none;
  /* @font-face {
    font-family: 'Pokemon Solid Regular';
    src: url("./fonts/Pokemon-Solid-Regular.otf") format('truetype');
  } */

  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1px;
  cursor: url(${AshCursor}), auto;
  transition: all 0.3s ease;
  :hover{
    box-shadow: rgba(64, 64, 64, 0.17) 0px -23px 25px 0px inset, rgba(64, 64, 64, 0.15) 0px -36px 30px 0px inset, rgba(64, 64, 64, 0.1) 0px -79px 40px 0px inset, rgba(64, 64, 64, 0.06) 0px 2px 1px, rgba(64, 64, 64, 0.09) 0px 4px 2px, rgba(64, 64, 64, 0.09) 0px 8px 4px, rgba(64, 64, 64, 0.09) 0px 16px 8px, rgba(64, 64, 64, 0.09) 0px 32px 16px;
  }
`
export const ButtonBackToPoke = styled.button`
  position: absolute;
  left: 32px;
  color: white;
  padding: 4px 10px;
  width: 240px;
  height: 60px;
  background: #33A4F5;
  border-radius: 8px;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: url(${AshCursor}), pointer;
  transition: all 0.3s ease;
  :hover{
    box-shadow: rgba(64, 64, 64, 0.17) 0px -23px 25px 0px inset, rgba(64, 64, 64, 0.15) 0px -36px 30px 0px inset, rgba(64, 64, 64, 0.1) 0px -79px 40px 0px inset, rgba(64, 64, 64, 0.06) 0px 2px 1px, rgba(64, 64, 64, 0.09) 0px 4px 2px, rgba(64, 64, 64, 0.09) 0px 8px 4px, rgba(64, 64, 64, 0.09) 0px 16px 8px, rgba(64, 64, 64, 0.09) 0px 32px 16px;
  }
`
export const ButtonRemovePoke = styled.button`
  position: absolute;
  right: 32px;
  color: Red;
  padding: 4px 10px;
  width: 240px;
  height: 60px;
  background: white;
  border-radius: 8px;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size:16px;
  letter-spacing: 1px;
  cursor: url(${RemovePokeCursor}), pointer;
  transition: all 0.3s ease;

  :hover{
    box-shadow: rgba(218, 218, 218, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(218, 218, 218, 0.1) 0px -79px 40px 0px inset, rgba(218, 218, 218, 0.06) 0px 2px 1px, rgba(218, 218, 218, 0.09) 0px 4px 2px, rgba(218, 218, 218, 0.09) 0px 8px 4px, rgba(218, 218, 218, 0.09) 0px 16px 8px, rgba(218, 218, 218, 0.09) 0px 32px 16px;
  }
`