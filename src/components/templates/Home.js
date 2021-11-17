import React from "react"
import styled from 'styled-components'

import Section from "../atoms/Section"
import Container from "../atoms/Container"
import Grid2 from "../atoms/Grid2"
import Grid3 from "../atoms/Grid3"
import Grid4 from "../atoms/Grid4"

const Card = styled.div`
   width: 100%;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 4px red solid;
   padding: 20px 0;
   &.--variant {
      border: 2px blue solid;
      font-weight: bold;
      color: white;
      background-color: chocolate;
   }
   &.--other {
      border: 2px white solid;
      font-weight: bold;
      color: white;
      background-color: gray;
   }
`

const Content = styled.p`
   font-size: 24px;
   margin: 0;
`

const Home = () => {

   return (
      <>
         <Section>
            <Container>
               <Grid3>
                  <Card><Content>CARD_1</Content></Card>
                  <Card><Content>CARD_2</Content></Card>
                  <Card><Content>CARD_3</Content></Card>
               </Grid3>
            </Container>
         </Section>
         <Section>
            <Container>
               <Grid4>
                  <Card className="--variant">               
                     <Content>CARD_1</Content>
                  </Card>
                  <Card className="--variant">               
                     <Content>CARD_2</Content>
                  </Card>
                  <Card className="--variant">               
                     <Content>CARD_3</Content>
                  </Card>
                  <Card className="--variant">               
                     <Content>CARD_4</Content>
                  </Card>
               </Grid4>
            </Container>
         </Section>
         <Section>
            <Container>
               <Grid2>
                  <Card className="--other">
                     <Content>CARD_1</Content>
                  </Card>
                  <Card className="--other">
                     <Content>CARD_2</Content>
                  </Card>
               </Grid2>
            </Container>
         </Section>

      </>
   )
}

export default Home