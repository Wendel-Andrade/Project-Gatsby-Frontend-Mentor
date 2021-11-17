import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import Section from "../components/atoms/Section"
import Container from "../components/atoms/Container"
import Home from "../components/templates/Home"

const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 40px 0 0;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.header};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0;
`

const SubTitle = styled.h3`
   font-family: ${({ theme }) => theme.fonts.family.body};
   font-size: 3rem;
   font-weight: 400;
   color: ${({ theme }) => theme.colors.secondary.main};
`

const Image = styled(Img)`
   width: 100vw;
   max-width: 500px;
   margin-top: 50px;
`

const IndexPage = () => {

   const content = useStaticQuery (
      graphql`
         {
            imgHome: file(relativePath: { eq: "demo.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1000) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
         }
      `
   )
  
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="MGCodes Template | GatsbyJS v1.0"
            keywords=""
         />
         <Section>
            <Container>
               <WrapTitle>
                  <SubTitle>My Boilerplate [v.1.0]</SubTitle>
                  <Title>GatsbyJS</Title>
                  <SubTitle>with Styled-components</SubTitle>
                  <Image fluid={content.imgHome.childImageSharp.fluid} />
               </WrapTitle>
            </Container>
         </Section>
         <Home />
      </Layout>
   )
}

export default IndexPage