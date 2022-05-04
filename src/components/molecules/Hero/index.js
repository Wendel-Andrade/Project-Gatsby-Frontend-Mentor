import React from 'react'
import { 
  HeroGrid,
  HeroLeftSide,
  HeroRightSide
  } from "./styles" 

const Hero = ( { className, children } ) => {
  return (
    <HeroGrid className={className}>
      <HeroLeftSide>{children}</HeroLeftSide>
      <HeroRightSide>{children}</HeroRightSide>
    </HeroGrid>
  )
}

export {
  HeroGrid,
  HeroLeftSide,
  HeroRightSide
}

export default Hero
