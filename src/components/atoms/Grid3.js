import React from "react"
import styled from "styled-components"
import media from "../../foundation/breakPoints"

const GridWrapper = styled.div`
   width: 100%;
   display: grid;
   grid-gap: 24px;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr;
   justify-items: center;
   padding: 56px 16px;
   background-color: transparent;

   ${media.greaterThan("sm")`
      padding: 56px 0;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
   `}

   ${media.greaterThan("lg")`
      padding: 80px 32px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
   `}

`

const Grid3 = ({ children, className }) => {
   return (
      <GridWrapper className={className}>
         {children}
      </GridWrapper>
   )
}

export default Grid3