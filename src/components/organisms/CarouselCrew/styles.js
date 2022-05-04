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

import BackImageMobile from "../../../images/crew/background-crew-mobile.jpg"
import BackImageTablet from "../../../images/crew/background-crew-tablet.jpg"
import BackImageDesktop from "../../../images/crew/background-crew-desktop.jpg"

// SECTION & CONTAINER
const CrewSection = styled(Section)`
  position: relative;
  height: 100vh;
  min-height: 71rem;
  background-image: url( ${ BackImageMobile } );
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: 0 0;
   &:before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(11,13,23,0.6);
   }


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

const CrewContainer = styled(Container)`
  height: 100%;
  display: block;
  padding: 8.8rem 2.4rem 5.8rem;
  margin: 0;
  background-color: transparent;
  z-index: 5; 

  ${media.greaterThan("md")`
  width: 100%;
  height: auto;
  padding: 13.6rem 0 0;
`}

  ${media.greaterThan("xl")`
  min-width: ${props => props.theme.maxWidth.xl};
  padding: 21.2rem 0 0;
  `}
`

// PAGE TITLE & NUMBER
const CrewPageTitle = styled(SubTitle)`
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
  margin-bottom: 0;
`}
`

const CrewPageNumber = styled.span`
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

// CAROUSEL GLIDE
const CrewCarousel = styled.div`
 position: relative;
` 
const GlideTrack = styled.div`
 overflow: hidden;
`  
const GlideSlides = styled.ul`
 position: relative;
 width: 100%;
 list-style: none;
 backface-visibility: hidden;
 transform-style: preserve-3d;
 touch-action: pan-Y;
 overflow: hidden; 
 white-space: nowrap;
 display: flex;
 flex-wrap: nowrap;
 margin: 0;
 padding: 0;
 will-change: transform;
 box-sizing: border-box;
 &.--dragging {
   user-select: none;
 }
` 
const CrewSlide = styled.li`
 width: 100%;
 height: 100%;
 flex-shrink: 0;
 white-space: normal;
 user-select: none;
 -webkit-touch-callout: none;
 -webkit-touch-highlight-color: transparent;
 margin: 0;
 & a {
   user-select: none;
   -webkit-user-drag: none;
   -moz-user-select: none;
   -ms-user-select: none;
 }

 ${media.greaterThan("md")`
 display: flex;
 flex-direction: column-reverse;
 padding: 0;
 `}

 ${media.greaterThan("xl")`
 height: 100vh;
 max-height: 70.2rem;
 flex-direction: row-reverse;
 `}
` 

// CAROUSEL LEFT SIDE & RIGHT SIDE 
const CrewLeftSide = styled(HeroLeftSide)`
 width: 100%;
 height: 100%;
 max-height: 22.3rem;  
 display: flex;
 justify-content: center;
 align-items: flex-end;
 border-bottom: 1px solid ${props => props.theme.colors.stroke};

 ${media.greaterThan("md")`
 max-height: 52.2rem;
 border: none;
 `}

 ${media.greaterThan("xl")`
 max-height: 100%;
 `}
` 
const CrewRightSide = styled(HeroRightSide)`
 position: relative;
 padding-top: 8rem;


 ${media.greaterThan("md")`
 max-width: 59rem;
 margin: 0 auto;
 padding: 0 0 9rem;
 `} 

 
 ${media.greaterThan("xl")`
 max-height: 100%;
 padding: 19rem 0 9rem;
 `} 
` 

// IMAGE ( CAROUSEL LEFT SIDE )
const CrewImage = styled(Image)`
 width: 100%;
 max-height: 22.2rem;

 ${media.greaterThan("md")`
 max-height: 53.2rem;
 & > picture > img {
   object-position: ${props => props.position || "bottom"} !important;
 }
 `}
 ${media.greaterThan("xl")`
 max-height: 70.2rem;
 & > picture > img {
   object-position: ${props => props.position || "right"} !important;
 }
 `}
` 

// TITLE & DESCRIPTIONS ( CAROUSEL RIGHT SIDE )
const CrewRole = styled(Title)`
 ${TitleStyles}
 margin-bottom: 0.8rem;
 font-size: ${props => props.theme.fonts.size.heading4xs};
 opacity: 0.5;
 
 ${media.greaterThan("md")`
 font-size: ${props => props.theme.fonts.size.heading4md};
 `}

 ${media.greaterThan("xl")`
 font-size: ${props => props.theme.fonts.size.heading4xl};
 text-align: left;
 margin-bottom: 1.4rem;
 `}
`
const CrewName = styled(Title)`
 ${TitleStyles}
 margin-bottom: 1.6rem;
 font-size: ${props => props.theme.fonts.size.heading3xs};

 
 ${media.greaterThan("md")`
 font-size: ${props => props.theme.fonts.size.heading3md};
 `}

 ${media.greaterThan("xl")`
 font-size: ${props => props.theme.fonts.size.heading3xl};
 text-align: left;
 margin-bottom: 2.7rem;
 width: 115%;

 `}
`
const CrewBio = styled(Paragraph)`
 ${ParagraphStyles}
  
 ${media.greaterThan("md")`
 font-size: ${props => props.theme.fonts.size.bodymd};
 line-height: 1.75;
 margin-bottom: 5rem;
 `}

 ${media.greaterThan("xl")`
 font-size: ${props => props.theme.fonts.size.bodymd};
 text-align: left;
 line-height: 1.75;
 margin-bottom: 0;
 width: 80%;
 `}
`

// CAROUSEL BULLETS
const GlideBullets = styled.div`
 position: absolute;
 top: 20rem;
 width: 100%;
 height: auto;
 display: flex;
 justify-content: center;
 font-family: ${props => props.theme.fonts.family.heading};
 font-size: ${props => props.theme.fonts.size.heading4xs};
 color: ${props => props.theme.colors.secondary.main}; 

 ${media.greaterThan("md")`
 top: 21rem;
 `}

 ${media.greaterThan("xl")`
 top: 58rem;
 justify-content: flex-start;
 `}
`
const GlideBullet = styled.button`
 width: 1rem;
 height: 1rem;
 border: none;
 border-radius: 1rem;
 background-color: ${props => props.theme.colors.secondary.main};
 opacity: 0.17;
 transition: .3s ease;
 cursor: pointer;
 &:not(:last-child) {
   margin-right: 1.6rem;
 }
 &hover,
 &.glide__bullet--active {
   opacity: 1;
   transition: .3s ease;
 }

 ${media.greaterThan("xl")`
 width: 1.5rem;
 height: 1.5rem;
 border-radius: 1.5rem;
 &:not(:last-child) {
   margin-right: 2.4rem;
 }
 `}
`
export {
  CrewSection,
  CrewContainer,
  CrewPageTitle,
  CrewPageNumber,
  CrewCarousel, 
  GlideTrack,  
  GlideSlides, 
  CrewSlide, 
  CrewLeftSide, 
  CrewRightSide, 
  CrewImage, 
  CrewRole,
  CrewName,
  CrewBio,
  GlideBullets,
  GlideBullet 
}