import React from "react"
import { 
  HomeSection,
  HomeContainer,
  HomeGrid,
  HomeLeftSide,
  HomeRightSide,
  HomeTitle,
  HomeSubTitle,
  HomeParagraph,
  HomeButtonCta
} from "./styles"

const HeroHome = ( { title, subtitle, description, className} ) => {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeGrid>
          <HomeLeftSide>
            <HomeSubTitle>{subtitle}</HomeSubTitle> 
            <HomeTitle>{title}</HomeTitle>
            <HomeParagraph>{description}</HomeParagraph>
          </HomeLeftSide>
          <HomeRightSide>
            <HomeButtonCta label="Explore" target="/" />
          </HomeRightSide>
        </HomeGrid>
      </HomeContainer>
    </HomeSection>
  )
}

export default HeroHome