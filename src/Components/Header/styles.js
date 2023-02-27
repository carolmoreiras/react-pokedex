import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background: rgb(228,40,37);
  background: linear-gradient(180deg, rgba(228,40,37,1) 0%, rgba(231,66,58,1) 47%, rgba(213,47,30,1) 84%, rgba(255,0,0,0) 100%);

  img{
  width: 307px;
  height: 300px;
  
  }

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
  :hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  :hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`