import styled from "styled-components"
import media from "../../../foundation/breakPoints"

import Section from "../../atoms/Section"
import Container from "../../atoms/Container"
import Title, { TitleStyles } from "../../atoms/Title"
import SubTitle, { SubTitleStyles } from "../../atoms/SubTitle"
import Paragraph, { ParagraphStyles } from "../../atoms/Paragraph"

import { 
  HeroGrid,
  HeroLeftSide,
  HeroRightSide
   } from "../../molecules/Hero"

import ButtonCta from "../../atoms/ButtonCta"

import BackImageMobile from "../../../images/home/background-home-mobile.jpg"
import BackImageTablet from "../../../images/home/background-home-tablet.jpg"
import BackImageDesktop from "../../../images/home/background-home-desktop.jpg"

const HomeSection = styled(Section)`
  height: 100vh;
  min-height: 60rem;
  background-image: url( ${ BackImageMobile } );
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: 0 0;

  ${media.greaterThan("md")`
    min-height: 90rem;
    background-image: url( ${ BackImageTablet } );
  `}

  ${media.greaterThan("xl")`
  min-height: 70rem;
  background-image: url( ${ BackImageDesktop } );
`}
`

const HomeContainer = styled(Container)`
  height: 100%;
  padding: 11.1rem 2.4rem 4.6rem;
  margin: 0;
  background-color: transparent;

  ${media.greaterThan("md")`
  min-width: 44.5rem;
  padding: 20.2rem 0 9rem;
`}

  ${media.greaterThan("xl")`
  min-width: ${props => props.theme.maxWidth.xl};
  padding: 20.2rem 0 13.1rem;
  `}
`

const HomeLeftSide = styled(HeroLeftSide)`
  height: 100%;
`

const HomeRightSide = styled(HeroRightSide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const HomeGrid = styled(HeroGrid)`

  ${media.greaterThan("xl")`
  justify-content: space-between;
    ${HomeLeftSide} {
      width: 45rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    ${HomeRightSide} {
      justify-content: flex-end;
    }
  `}
`


const HomeTitle = styled(Title)`
  ${TitleStyles}
  margin-bottom: 2.5rem;

  ${media.greaterThan("md")`
   font-size: ${props => props.theme.fonts.size.heading1md};
   margin-bottom: 2rem;
  `}
  
  ${media.greaterThan("xl")`
    text-align: left;
  `}
`


const HomeSubTitle = styled(SubTitle)`
   ${SubTitleStyles}
   margin-bottom: 2rem;

   ${media.greaterThan("md")`
   font-size: ${props => props.theme.fonts.size.subheading1md};
   letter-spacing: ${props => props.theme.fonts.charspace.subheadingmd};
  `}
  ${media.greaterThan("xl")`
   font-size: ${props => props.theme.fonts.size.subheading1xl};
   letter-spacing: ${props => props.theme.fonts.charspace.subheadingxl};
   text-align: left;
   margin-bottom: 3.2rem;
  `}
`

const HomeParagraph = styled(Paragraph)`
   ${ParagraphStyles}}

   ${media.greaterThan("md")`
   font-size: ${props => props.theme.fonts.size.bodymd};
   line-height: 2.8rem;
  `}
  ${media.greaterThan("xl")`
  font-size: ${props => props.theme.fonts.size.bodyxl};
  text-align: left;
  line-height: 3.2rem;
 `}
`

const HomeButtonCta = styled(ButtonCta)`
   width: 15rem;
   height: 15rem;

   ${media.greaterThan("md")`
   width: 24.2rem;
   height: 24.2rem;
   font-size: ${props => props.theme.fonts.size.ctamd};
   letter-spacing: ${props => props.theme.fonts.charspace.ctamd};
  `}
  ${media.greaterThan("xl")`
  width: 24.2rem;
  height: 24.2rem;
 `}
` 
export {
  HomeSection,
  HomeContainer,
  HomeGrid,
  HomeLeftSide,
  HomeRightSide,
  HomeTitle,
  HomeParagraph,
  HomeSubTitle,
  HomeButtonCta
}