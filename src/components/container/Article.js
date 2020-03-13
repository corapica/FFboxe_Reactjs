import React from 'react'
import styled from 'styled-components'

export const Article = () => {
  return (
    <Container>
      <Header>
        <Avatar1 src='https://upload.wikimedia.org/wikipedia/fr/thumb/6/60/Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_Boxe_2019.svg/1023px-Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_Boxe_2019.svg.png' />

        <ImageContainer>
          <Avatar src='https://www.ffboxe.com/wp-content/uploads/2019/06/federation-francaise-boxe.jpg' />
        </ImageContainer>
        <TitleContainer>
          <span>La Fédération française de boxe</span>
        </TitleContainer>
      </Header>
      <Content>
        <p>
          <b>La Fédération française de boxe (FFBoxe)</b> est une fédération
          olympique comptant plus de 60 000 licenciés. Elle propose différentes
          modalités de pratiques adaptées aux âges, motivations de chacun et
          particularités des différents publics, féminins, masculins : la Boxe
          professionnelle, la Boxe amateur/olympique, la Boxe éducative, la Boxe
          loisir, l’Aéroboxe et l’Handi-boxe. Avec son projet de développement
          D.E.F.I.S Boxe (Diversité-Education-Formation-Inclusion-Santé), la
          FFBoxe a structuré une politique fédérale en faveur des personnes en
          difficulté sociale. Fondée en 1903, elle est reconnue d’utilité
          publique par décret du 16 mai 2011. La FFBoxe comprend 18 comités
          régionaux, organes déconcentrés déclinant la politique et le projet
          fédéral sur le territoire.
        </p>
      </Content>
    </Container>
  )
}

const Avatar = styled.img`
  width: 372px;
  height: 322px;
  margin-top: 130px;
`
const Avatar1 = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0px;
  right: 0px;
`

const Content = styled.div``

const TitleContainer = styled.div`
  color: #e30952;
  font-size: 28px;
  font-family: Montserrat, sans-serif;
  padding-top: 20px;
  text-align: left;
  font-weight: bold;
`

const ImageContainer = styled.div`
  padding: 25 px;
`

const Header = styled.div`
  padding: 12px 6px;
`

const Container = styled.div`
  margin: 18px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  color: #004185;
  font-family: Montserrat, sans-serif;
`

export default Article
