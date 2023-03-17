import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  padding-top: 12px;
  background: rgb(254,38,38);
  background: linear-gradient(0deg, rgba(254,38,38,1) 0%, rgba(196,38,38,0.9108018207282913) 0%, rgba(212,40,40,1) 11%, rgba(218,50,50,1) 24%, rgba(237,55,55,1) 41%, rgba(230,55,55,1) 56%, rgba(224,54,54,1) 67%, rgba(219,54,54,1) 88%, rgba(219,57,57,1) 100%);
  
`
export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  justify-content: space-evenly;

  `
export const Paragraphs = styled.div`
  p{
    font-size: 16px;
    line-height: 20px;
}

`

export const ContainerIcons = styled.div`
  display: flex;
  color: white;
  gap: 16px;
`