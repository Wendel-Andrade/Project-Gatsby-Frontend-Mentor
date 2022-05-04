import styled from "styled-components"
import Image from "gatsby-image"
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

import BackImageMobile from "../../../images/destination/background-destination-mobile.jpg"
import BackImageTablet from "../../../images/destination/background-destination-tablet.jpg"
import BackImageDesktop from "../../../images/destination/background-destination-desktop.jpg"

const DestinationSection = styled(Section)`
  height: 100vh;
  min-height: 85rem;
  background-image: url( ${ BackImageMobile } );
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: 0 0;

  ${media.greaterThan("md")`
    height: 100%;
    min-height: 102.4rem;
    background-image: url( ${ BackImageTablet } );
  `}

  ${media.greaterThan("xl")`
  min-height: 97.9rem;
  background-image: url( ${ BackImageDesktop } );
  `} 
`

const DestinationContainer = styled(Container)`
  height: 100%;
  display: block;
  padding: 8.8rem 2.4rem 5.8rem;
  margin: 0;
  background-color: transparent;

  ${media.greaterThan("md")`
  min-width: ${props => props.theme.maxWidth.md};
  padding: 13.6rem 0 6.2rem;
`}

  ${media.greaterThan("xl")`
  min-width: ${props => props.theme.maxWidth.xl};
  padding: 21.2rem 0 11.8rem;
  `}
`
const DestinationPageTitle = styled(SubTitle)`
  ${SubTitleStyles}
  color: ${props => props.theme.colors.secondary.main};
  margin-bottom: 3.2rem;

  ${media.greaterThan("md")`
  font-size: ${props => props.theme.fonts.size.subheading1md};
  letter-spacing: ${props => props.theme.fonts.charspace.subheadingmd};
  text-align: left;
  margin-bottom: 6rem;
`}

  ${media.greaterThan("xl")`
  font-size: ${props => props.theme.fonts.size.subheading1xl};
  letter-spacing: ${props => props.theme.fonts.charspace.subheadingxl};
  margin-bottom: 6.4rem;
`}
`

const DestinationPageNumber = styled.span`
  ${SubTitleStyles}
  color: ${props => props.theme.colors.secondary.dark};
  font-weight: bold;
  margin-right: 1.8rem;

  ${media.greaterThan("md")`
  font-size: ${props => props.theme.fonts.size.subheading1md};
  letter-spacing: ${props => props.theme.fonts.charspace.subheadingmd};
  `}

  ${media.greaterThan("xl")`
  font-size: ${props => props.theme.fonts.size.subheading1xl};
  letter-spacing: ${props => props.theme.fonts.charspace.subheadingxl};
  `}
`

const DestinationLeftSide = styled(HeroLeftSide)`
  width: 100%;
  height: auto;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;

  ${media.greaterThan("md")`
  padding-bottom: 5.3rem;
  `}

  ${media.greaterThan("xl")`
  padding-bottom: 0;
  `}
`

const DestinationRightSide = styled(HeroRightSide)`
    

`

const DestinationGrid = styled(HeroGrid)`
   padding: 0;
  ${media.greaterThan("xl")`
    ${DestinationLeftSide} {
      width: 60%;
      text-align: left;
      padding: 4rem 0 0 6rem;
    }
    ${DestinationRightSide} {
      width: 40%;
    }
  `}
`

// IMAGE (LEFT SIDE)

const TabImage = styled(Image)`
 max-width: 17rem;
 max-height: 17rem;

 ${media.greaterThan("md")`
 max-width: 30rem;
 max-height: 30rem;
 `}

 ${media.greaterThan("xl")`
 max-width: 44.5rem;
 max-height: 44.5rem;
 `}
`

// NAV TABS (RIGHT SIDE)

const  DestinationTabs = styled.div`
  width: 100%;
  height: auto;
`
const  TabNav = styled.nav`
  max-width: 23.8rem;
  width: 100%;
  height: auto;
  margin: 0 auto 2rem;
  padding: 0;

  ${media.greaterThan("md")`
  max-width: 28.5rem;
  margin: 0 auto 3.2rem;
  `}

  ${media.greaterThan("xl")` 
  margin: 0 0 3.2rem;
  `}
`
const  ListItems = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const  Item = styled.li`
 display: block;
 margin: 0;
 padding: 0;
`
const  Action = styled.button`
 display:block;
 font-family: ${props => props.theme.fonts.family.subheading};
 font-size:  ${props => props.theme.fonts.size.navlink2};
 font-weight: normal;
 letter-spacing:  ${props => props.theme.fonts.charspace.navlink};
 text-transform: uppercase;
 text-decoration: none;
 border: none;
 cursor: pointer;
 color:  ${props => props.active ? "#FFFFFF" : "#D0D6F9"};
 border-color: ${props => props.active ? "#FFFFFF" : "transparent" }; 
 background-color: transparent;
 border-bottom: 3px solid transparent;
 transition: border-bottom .3s ease;
 padding: 0 0 1rem;
 &:hover,
 &:active,
 &:focus {
   color: ${props => props.theme.colors.secondary.main};
   border-bottom: 3px solid ${props => props.theme.colors.secondary.main};
   transition: border-bottom .3s ease;
  }

  ${media.greaterThan("md")`
  font-size: ${props => props.theme.fonts.size.navlink1};
  `}
`


const DestinationTitle = styled(Title)`
  ${TitleStyles}
  font-size: ${props => props.theme.fonts.size.heading2xs};
  margin-bottom: 0.5rem;

  ${media.greaterThan("md")`
   font-size: ${props => props.theme.fonts.size.heading2md};
  `}
  
  ${media.greaterThan("xl")`
    font-size: ${props => props.theme.fonts.size.heading2xl};
    text-align: left;
    margin-bottom: 2rem;
  `}
`

const DestinationParagraph = styled(Paragraph)`
   ${ParagraphStyles}}
    margin-bottom: 3.2rem;

   ${media.greaterThan("md")`
   font-size: ${props => props.theme.fonts.size.bodymd};
   line-height: 1.75;
   margin-bottom: 4.9rem;
   padding: 0 5.45rem;  
  `}

  ${media.greaterThan("xl")`
  font-size: ${props => props.theme.fonts.size.bodyxl};
  line-height: 3.2rem;
  margin-bottom: 5.4rem;
  text-align: left;
  padding: 0;
 `}
`

// BOOKMARKS (RIGHT SIDE)

const BookMarks = styled.div`
  width: 100%;
  height: auto;
  border-top: 5px solid ${props => props.theme.colors.stroke};
  text-align: center;

  ${media.greaterThan("md")`
  display: flex;
  padding: 0 10rem;
 `}

  ${media.greaterThan("xl")`
  padding: 0;
  `}
`
const ScoreItem = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 2.8rem; 
`
const ScoreTitle = styled.p`
  ${SubTitleStyles}
  font-size: ${props => props.theme.fonts.size.bookmarktitle};
  letter-spacing: ${props => props.theme.fonts.charspace.bookmarktitle};
  color: ${props => props.theme.colors.primary.main};
  margin: 0;

  ${media.greaterThan("xl")`
  text-align: left;
 `}
`
const ScoreValue = styled.p`
  ${TitleStyles}
  font-size: ${props => props.theme.fonts.size.bookmarkvalue};
  color: ${props => props.theme.colors.secondary.main};
  margin: 0;
  padding: 0.2rem 0;

  ${media.greaterThan("xl")`
  text-align: left;
 `}
`

export {
  DestinationSection,
  DestinationContainer,
  DestinationPageTitle,
  DestinationPageNumber,
  DestinationGrid,
  DestinationLeftSide,
  DestinationRightSide,
  DestinationTitle,
  DestinationParagraph,
  DestinationTabs,
  TabNav,
  TabImage,
  ListItems,
  Item,
  Action,
  BookMarks,
  ScoreItem,
  ScoreTitle,
  ScoreValue
}