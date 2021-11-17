import React from "react"
import styled from "styled-components"
import media from "../../foundation/breakPoints"

const GridWrapper = styled.div`
   width: 100%;
   display: grid;
   grid-gap: 32px;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr;
   justify-items: center;
   padding: 56px 16px;

   ${media.greaterThan("sm")`
      padding: 56px 0;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 28px;
   `}

   ${media.greaterThan("lg")`
      grid-gap: 48px;
   `}

   ${media.greaterThan("xl")`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 24px;
   `}

   ${media.greaterThan("xxl")`
      grid-gap: 36px;
   `}

`

const Grid4 = ({ children, className }) => {
   return (
      <GridWrapper className={className}>
         {children}
      </GridWrapper>
   )
}

export default Grid4