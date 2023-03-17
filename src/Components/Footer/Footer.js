import { FooterContainer, ContainerInfos, ContainerIcons, Paragraphs } from "../Footer/FooterStyle"
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs"

export const Footer = () => {
  return (
    <FooterContainer>
      <ContainerInfos>
        <ContainerIcons>
          <a href="https://github.com/carolmoreiras">
            <BsGithub size={'36px'} />
          </a>
          <a href="https://www.linkedin.com/in/carol-moreiras/">
            <BsLinkedin size={'36px'} />
          </a>
        </ContainerIcons>
        <Paragraphs>
          <p>&#xa9;2023 Carol Moreira</p>
          <p>Projeto React/Pokédex.</p>
        </Paragraphs>
      </ContainerInfos>
    </FooterContainer>
  )
}