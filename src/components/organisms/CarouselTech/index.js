import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Glide from "@glidejs/glide"

import { TechSection,
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
         TechFixedName,
         TechName,
         TechDescription,
         GlideBullets,
         GlideBullet } from "./styles"

const options = {
   type: "carousel",
   gao: 0,
   startAt: 0,
   perView: 1,
}

const dataJson = require("../../data/data.json")
const dataTech = dataJson.technology

const CarouselTech = ({ pagetitle, 
                        pagenumber, 
                        className, 
                        element = "glide" }) => {

   const sliderTech = new Glide(`.${element}`, options)  
   
   useEffect(() => {
      sliderTech.mount()
   }, [sliderTech])

   const content = useStaticQuery(graphql`
      query {
         carouselMobile: allFile (
            filter: {
               relativeDirectory: { eq: "technology" }, 
               name: { regex: "/image1/" }, 
               extension: { eq: "jpg" }
            }
            sort: { order: ASC, fields: name }
         ) {
            edges {
               node {
                  childImageSharp {
                     fluid(maxWidth: 768) {
                        ...GatsbyImageSharpFluid
                     }
                  }
               }
            }
         }
         carouselDesktop: allFile (
            filter: {
               relativeDirectory: { eq: "technology" }, 
               name: { regex: "/image2/" }, 
               extension: { eq: "jpg" }
            }
            sort: { order: ASC, fields: name }
         ) {
            edges {
               node {
                  childImageSharp {
                     fluid(maxWidth: 515) {
                        ...GatsbyImageSharpFluid
                     }
                  }
               }
            }
         }
      }
   `)

   return (
      <TechSection className={className}>
         <TechContainer>
            <TechPageTitle>
               <TechPageNumber>
                  {pagenumber}
               </TechPageNumber>
               {pagetitle}
            </TechPageTitle>
            <TechCarousel className={element}>
               <GlideTrack data-glide-el="track">
                  <GlideSlides>
                     {dataTech.map((slide, index) => (
                        <TechSlide key={index} className="slider">
                           <TechLeftSide>
                              <TechImage 
                                 imgStyle={{ objectFit: "cover" }}
                                 fluid={[
                                    content.carouselMobile.edges[slide.id - 1].node.childImageSharp.fluid,
                                    {
                                       ...content.carouselDesktop.edges[slide.id - 1].node.childImageSharp.fluid,
                                       media: `(min-width: 1200px)`
                                    }
                                 ]}
                                 alt={slide.name}
                              />
                           </TechLeftSide>
                           <TechRightSide>
                              <TechFixedName>
                                 The Terminology…
                              </TechFixedName>
                              <TechName>
                                 {slide.name}
                              </TechName>
                              <TechDescription>
                                 {slide.description}
                              </TechDescription>
                           </TechRightSide>
                        </TechSlide>
                     ))}
                  </GlideSlides>
               </GlideTrack>
               <GlideBullets data-glide-el="controls[nav]">
                  <GlideBullet data-glide-dir="=0">1</GlideBullet>
                  <GlideBullet data-glide-dir="=1">2</GlideBullet>
                  <GlideBullet data-glide-dir="=2">3</GlideBullet>
               </GlideBullets>
            </TechCarousel>
         </TechContainer>
      </TechSection>
   )
}

export default CarouselTech