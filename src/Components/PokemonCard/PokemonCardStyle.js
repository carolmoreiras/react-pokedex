import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 440px;
  height: 210px;
  background: #729F92;
  border-radius: 12px;
  margin: 50px;
`
export const Button = styled.button`
  height: 38px;
  width: 146px;
  left: 249px;
  top: 0px;
  border-radius: 8px;
  padding: 4px 10px 4px 10px;
  border: none;
  color: #0F0F0F;
`
export const BgPokebola = styled.img`
 position: absolute;
 z-index: 10;

left: 190px;
top: 0;
 
`
export const ImgPokeCard = styled.img`
  position: absolute;
  width: 200px;
  right: 8px;
  top: -56px;
  z-index: 50;
`

export const DetailsGotcha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`