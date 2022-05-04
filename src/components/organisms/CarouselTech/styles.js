import styled from "styled-components"
import Image from "gatsby-image"
import media from "../../../foundation/breakPoints"

import Section from "../../atoms/Section"
import Container from "../../atoms/Container"
import { HeroLeftSide, HeroRightSide } from "../../molecules/Hero"
import Title, { TitleStyles } from "../../atoms/Title"
import SubTitle, { SubTitleStyles } from "../../atoms/SubTitle"
import Paragraph, { ParagraphStyles } from "../../atoms/Paragraph"

import BackImageMobile from "../../../images/technology/background-technology-mobile.jpg"
import BackImageTablet from "../../../images/technology/background-technology-tablet.jpg"
import BackImageDesktop from "../../../images/technology/background-technology-desktop.jpg"

// SECTION & CONTAINER
const TechSection = styled(Section)`
   position: relative;
   height: 100vh;
   min-height: 71rem;
   background-image: url(${BackImageMobile});
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
      padding: 0;
      margin: 0;
   }
   ${media.greaterThan("md")`
      height: 100%;
      min-height: 102.4rem;
      background-image: url(${BackImageTablet});
   `}
   ${media.greaterThan("xl")`
      min-height: 90rem;
      background-image: url(${BackImageDesktop});
   `}
`
       
const TechContainer = styled(Container)`
   height: 100%;
   display: block;
   padding: 8.8rem 0 5.8rem;
   margin: 0;
   background-color: transparent;
   z-index: 5;
   ${media.greaterThan("md")`
      width: 100%;
      max-width: 100%;
      padding: 13.6rem 0 9.7rem;
   `}
   ${media.greaterThan("xl")`
      max-width: 144rem;
      height: 100vh;
      margin: 0 auto;
      padding: 15rem 0 10rem 16.5rem;
   `}
`

// PAGE NUMBER & TITLE
const TechPageTitle = styled(SubTitle)`
   ${SubTitleStyles}
   color: ${props => props.theme.colors.secondary.main};
   margin-bottom: 3.2rem;
   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.subheading1md};
      letter-spacing: ${props => props.theme.fonts.charspace.subheadingmd};
      text-align: left;
      margin-bottom: 6rem;
      padding-left: 3.85rem;
   `}
   ${media.greaterThan("xl")`
      position: absolute;
      font-size: ${props => props.theme.fonts.size.subheading1xl};
      letter-spacing: ${props => props.theme.fonts.charspace.subheadingxl};
      padding-left: 0;
      margin-top: 6rem;
   `}
`

const TechPageNumber = styled.span`
   ${SubTitleStyles}
   color: ${props => props.theme.colors.secondary.dark};
   font-weight: bold;
   margin-right: 1.6rem;
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
const TechCarousel = styled.div`
   position: relative;
   ${media.greaterThan("xl")`
      display: flex;
      flex-direction: row-reverse;
      padding-top: 10rem;
   `}
`

const GlideTrack = styled.div`
   overflow: hidden;
`

const GlideSlides = styled.ul`
   position: relative;
   width: 100%;
   list-style: none;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   transform: none !important;
   display: grid;
   grid-template-areas: "slide";
`

const TechSlide = styled.li`
   width: 100%;
   height: 100%;
   position: relative;
   grid-area: slide;
   opacity: 0;
   transition: opacity .3s ease;
   &.glide__slide--active {
      opacity: 1;
      transition: opacity .3s ease;
      z-index: 1;
   }
   ${media.greaterThan("xl")`
      display: flex;
      flex-direction: row-reverse;
   `}
`

// CAROUSEL LEFT SIDE & RIGHT SIDE
const TechLeftSide = styled(HeroLeftSide)`
   width: 100%;
   ${media.greaterThan("xl")`
      width: 51.5rem;
      height: 100%;
   `}
`

const TechRightSide = styled(HeroRightSide)`
   position: relative;
   padding: 10rem 2.4rem 0;
   ${media.greaterThan("md")`
      padding: 16rem 15.5rem 0;
   `}
   ${media.greaterThan("xl")`
      width: 68rem;
      padding: 11.7rem 0 0 8rem;
   `}
`

// IMAGE (CAROUSEL LEFT SIDE)
const TechImage = styled(Image)`
   width: 100%;
   height: 17rem;
   ${media.greaterThan("md")`
      height: 31rem;
   `}
   ${media.greaterThan("xl")`
      width: 100%;
      height: 100%;
   `}
 
`

// TITLE & DESCRIPTION (CAROUSEL RIGHT SIDE)
const TechFixedName = styled(SubTitle)`
   ${SubTitleStyles}
   font-size: ${props => props.theme.fonts.size.subheading2xs};
   letter-spacing: 2.36px;
   margin-bottom: 1rem;
   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.subheading2md};
      letter-spacing: ${props => props.theme.fonts.size.subheadingxs};
      margin-bottom: 1.6rem;
   `}
   ${media.greaterThan("xl")`
      text-align: left;
   `}
`

const TechName = styled(Title)`
   ${TitleStyles}
   margin-bottom: 1.6rem;
   font-size: ${props => props.theme.fonts.size.heading3xs};
   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.heading3md};
   `}
   ${media.greaterThan("xl")`
      font-size: ${props => props.theme.fonts.size.heading3xl};
      text-align: left;
   `}
`

const TechDescription = styled(Paragraph)`
   ${ParagraphStyles}
   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.bodymd};
      line-height: 1.75;
   `}
   ${media.greaterThan("xl")`
      width: 44.4rem;
      font-size: ${props => props.theme.fonts.size.bodyxl};
      text-align: left;
   `}
`

// CAROUSEL BULLETS
const GlideBullets = styled.div`
   position: absolute;
   top: 20.5rem;
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   font-family: ${props => props.theme.fonts.family.heading};
   font-size: ${props => props.theme.fonts.size.heading4xs};
   z-index: 5;
   ${media.greaterThan("md")`
      top: 37rem;
      font-size: ${props => props.theme.fonts.size.heading4md};
   `}
   ${media.greaterThan("xl")`
      position: relative;
      width: auto;
      top: 11.7rem;
      flex-direction: column;
      justify-content: flex-start;
   `}
`

const GlideBullet = styled.button`
   width: 4rem;
   height: 4rem;
   border: 1px solid rgba(255,255,255,0.25);
   background-color: transparent;
   color: ${props => props.theme.colors.secondary.main};
   border-radius: 50%;
   cursor: pointer;
   transition: all .3s ease;
   &:not(:last-child) {
      margin-right: 1.6rem;
   }
   &:hover {
      border: 1px solid ${props => props.theme.colors.secondary.main};
      transition: all .3s ease;
   }
   &.glide__bullet--active {
      background-color: ${props => props.theme.colors.secondary.main};
      color: ${props => props.theme.colors.background.main};
   }
   ${media.greaterThan("md")`
      width: 6rem;
      height: 6rem;
   `}
   ${media.greaterThan("xl")`
      width: 8rem;
      height: 8rem;
      &:not(:last-child) {
         margin-right: 0;
         margin-bottom: 3.2rem;
      }
   `}
`

export {
   TechSection,
   TechContainer,
   TechPageTitle,
   TechPageNumber,
   TechCarousel,
   GlideTrack,
   GlideSlides,
   TechSlide,
   TechLeftSide,
   TechRightSide,
   TechImage,
   TechName,
   TechFixedName,
   TechDescription,
   GlideBullets,
   GlideBullet
}