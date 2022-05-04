import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Glide from "@glidejs/glide"

import { 
  CrewSection,
  CrewContainer,
  CrewPageTitle,
  CrewPageNumber,
  CrewCarousel,
  GlideTrack,
  GlideSlides,
  CrewLeftSide,
  CrewRightSide,
  CrewImage,
  CrewSlide,
  CrewRole,
  CrewName,
  CrewBio,
  GlideBullets,
  GlideBullet
  } from "./styles"

const options = {
  type: "carosel",
  gao: 0,
  startAt: 0,
  perView: 1,
  autoplay: 5000,
  hoverpause: true,
  animationDuration: 1000
}

const dataJson = require("../../data/data.json")
const dataCrew = dataJson.crew

const CarouselCrew = ( { pagetitle,
                        pagenumber,
                        title,
                        subtitle,
                        description,
                        className,
                        element = "glide"} ) => {

  const sliderCrew = new Glide(`.${element}`, options)
  
  useEffect(() => {
    sliderCrew.mount()
  }, [sliderCrew])

  const content = useStaticQuery(graphql`
    query {
      carousel: allFile (
        filter: {
        relativeDirectory: {eq: "crew"},
        name: {regex: "/image/"},
        extension: {eq: "webp"}
      }
        sort: {order: ASC, fields: name}
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 575) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <CrewSection>
      <CrewContainer>
        <CrewPageTitle>
          <CrewPageNumber>
            {pagenumber}
          </CrewPageNumber>
            {pagetitle}
          </CrewPageTitle>
          <CrewCarousel className={element}>
            <GlideTrack data-glide-el="track">
              <GlideSlides>
              {dataCrew.map((slide, index) => (
                <CrewSlide key={index} className="slider">
                  <CrewLeftSide>
                  <CrewImage 
                    imgStyle={{ objectFit: "contain" }} 
                    fluid={content.carousel.edges[slide.id - 1].node.childImageSharp.fluid}
                    alt={slide.name} 
                    />
                  </CrewLeftSide>
                  <CrewRightSide>
                    <CrewRole>{slide.role}</CrewRole>
                    <CrewName>{slide.name}</CrewName>
                    <CrewBio>{slide.bio}</CrewBio>
                  </CrewRightSide>
                </CrewSlide>
              ))}
              </GlideSlides>
            </GlideTrack>
            <GlideBullets data-glide-el="controls[nav]">
              <GlideBullet data-glide-dir="-0"></GlideBullet>
              <GlideBullet data-glide-dir="-1"></GlideBullet>
              <GlideBullet data-glide-dir="-2"></GlideBullet>
              <GlideBullet data-glide-dir="-3"></GlideBullet>
            </GlideBullets>
          </CrewCarousel>
      </CrewContainer>
    </CrewSection>
  )
}

export default CarouselCrew