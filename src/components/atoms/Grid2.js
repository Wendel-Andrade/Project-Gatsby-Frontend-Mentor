import React from "react"
import styled from "styled-components"
import media from "../../foundation/breakPoints"

const GridWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   padding: 0;
   margin: 20px 0;

   ${media.greaterThan("md")`
      flex-direction: row;
      justify-content: space-around;
   `}

`
const Grid2 = ({ children, className }) => {
   return (
      <GridWrapper className={className}>
         {children}
      </GridWrapper>
   )
}

export default Grid2