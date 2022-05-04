import styled, { css } from "styled-components"
import media from "../../../foundation/breakPoints"
import Grid2 from "../../atoms/Grid2"

const side = css`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`

const HeroLeftSide = styled.div`
  ${side}
`

const HeroRightSide = styled.div`
  ${side}
`

const HeroGrid = styled(Grid2)`
  ${media.greaterThan("md")`
    ${HeroLeftSide} {
      height: 50%;
    }
    ${HeroRightSide} {
      height: 50%;
    }
  `}
  ${media.greaterThan("xl")`
  ${HeroLeftSide} {
    width: 50%;
    height: 100%;
  }
  ${HeroRightSide} {
    width: 50%;
    height: 100%;
  }
`}
`

export {
  HeroGrid,
  HeroLeftSide,
  HeroRightSide
}