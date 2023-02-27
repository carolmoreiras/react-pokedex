import styled from "styled-components";

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
`

export const Button = styled.button`
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

`
export const BgPokebola = styled.img`
 position: absolute;
width: 224px;
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

