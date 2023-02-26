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

  button{
   position: absolute;
   right: 32px;
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
   font-size: 24px;
   letter-spacing: 1px;
  
  }
`