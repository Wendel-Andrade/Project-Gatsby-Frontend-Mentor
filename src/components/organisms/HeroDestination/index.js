import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { 
  DestinationSection,
  DestinationContainer,
  DestinationPageTitle,
  DestinationPageNumber,
  DestinationGrid,
  DestinationLeftSide,
  DestinationRightSide,
  DestinationTitle,
  DestinationParagraph,
  DestinationTabs,
  TabNav,
  ListItems,
  TabImage,
  Item,
  Action,
  BookMarks,
  ScoreItem,
  ScoreTitle,
  ScoreValue
  } from "./styles"

const dataJson = require("../../data/data.json")
const dataDestination = dataJson.destinations

const HeroDestination = ( { pagetitle, pagenumber, title, subtitle, description, className} ) => {

  const [active, setActive] = useState(dataDestination[0])

  const content = useStaticQuery(graphql`
    query {
      tabImage: allFile (
        filter: {
        relativeDirectory: {eq: "destination"},
        name: {regex: "/image/"},
        extension: {eq: "webp"}
      }
        sort: {order: ASC, fields: name}
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 445, height: 445) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <DestinationSection>
      <DestinationContainer>
        <DestinationPageTitle>
          <DestinationPageNumber>
            {pagenumber}
          </DestinationPageNumber>
            {pagetitle}
          </DestinationPageTitle>
        <DestinationGrid>
          <DestinationLeftSide>
            <TabImage 
            active 
            fixed={content.tabImage.edges[active.id - 1].node.childImageSharp.fixed}
            alt={active.alt} 
            />
          </DestinationLeftSide>
          <DestinationRightSide>
            <DestinationTabs>
              <TabNav>
                <ListItems>
                  {dataDestination.map(item => (
                     <Item key={item.id}>
                      <Action
                        key={item.id}
                        id={item.id}
                        active={active === item}
                        onClick={() => {setActive(item)}}
                      >
                        {item.name}
                      </Action>
                     </Item>
                  ))}
                </ListItems>
              </TabNav>
            </DestinationTabs>
            <DestinationTitle>{active.name}</DestinationTitle>
            <DestinationParagraph>
              {active.description}
            </DestinationParagraph>
            <BookMarks>
              <ScoreItem>
                <ScoreTitle>Avg. Distance</ScoreTitle>
                <ScoreValue>{active.distance}</ScoreValue>
              </ScoreItem>
              <ScoreItem>
                <ScoreTitle>Est. Travel Time</ScoreTitle>
                <ScoreValue>{active.travel}</ScoreValue>
              </ScoreItem>
            </BookMarks>
          </DestinationRightSide>
        </DestinationGrid>
      </DestinationContainer>
    </DestinationSection>
  )
}

export default HeroDestination