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

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 32px;
  width: calc(100% - 64px);
  height: 600px;
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
width: 800px;
top: 0;
right:0;
 
`

export const ImgPokemon = styled.img`

  position: absolute;
  width: 200px;
  right: 50px;
  top: -100px;
  z-index: 10;


`

export const ContainerImgsPokes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

 
`

export const ContainerPokes = styled.img`

  background-color: white;
  width: 250px;
  height: 250px;
 
  border: 2px solid #FFFFFF;
  border-radius: 8px;
`


export const ContainerBaseStats = styled.div`
display: flex;
flex-direction: column;
    background-color: white;
   height: 520px;
   width: 250px;
   z-index: 10;
   border-radius: 12px;
   
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
  height: 420px;
  width: 250px;
  /* z-index: 100; */
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
