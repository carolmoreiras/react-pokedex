import styled from "styled-components";

export const Phrase = styled.h2`
  font-family: 'Pokemon Solid Regular';
  font-size: 36px;
  color: #3E5CB2;
  text-shadow: 3px 3px 2px rgba(255, 255, 42, 1),6px 6px 3px rgba(255, 19, 19, 0.78);
  margin-top: 10px;
  margin-left: 40px;
  @font-face {
    font-family: 'Pokemon Solid Regular';
    src: url('Pokemon Solid.ttf') format('truetype');
    font-style: normal;
  }

`
export const LeftContainer = styled.div`
  display: flex;
  gap: 34px;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 34px;
  `

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 68px;
  margin: 0 32px;
  width: calc(100% - 64px);
  height: 560px;
  background: #729F92;
  border-radius: 37px;
  padding: 32px;
  margin-top: 60px;
  margin-bottom: 40px;

  p{
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 700;
  }
`

export const BgPokebola = styled.img`
 position: absolute;
width: 740px;
top: 0;
right:0;
 
`

export const ImgPokemon = styled.img`

  position: absolute;
  width: 300px;
  right: 24px;
  top: -80px;
  z-index: 10;


`

export const ContainerImgsPokes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

 
`
export const ContainerPokes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 230px;
  height: 230px;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
`

export const PokeGif = styled.img`
  width: 80%;
`

export const ContainerBaseStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  width: 340px;
  border-radius: 12px;
  padding: 12px;
  z-index: 10;
    
  p, h2{
    color: black;
  }
`
export const ContainerType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: static;

`

export const ContainerMoves = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 250px;
  z-index: 100;
  border-radius: 12px;

    h2{
      font-family: 'Inter';  
      color: black;
      margin: 10px 16px;
    }

   p{
    margin: 10px 16px;
    padding: 10px;
    color: black;
    font-family: 'Montserrat';
    font-size: 14px;
    background: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
   }
`
export const StatBar = styled.div`
  height: 10px;
  border-radius: 8px;
  width: 109px;
  background-color: transparent;
`

export const InnerBar = styled.div`
  height: 10px;
  border-radius: 8px;
  background-color: orange;
`
export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const StatName = styled.p`
  display: flex;
  justify-content: end;
  width: 40%;
`

export const StatNumber = styled.p`
  width: 10%;
`