import React from "react"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import CarouselCrew from "../components/organisms/CarouselCrew"

const CrewPage = () => {  
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="Crew | Space Tourism"
         />
        <CarouselCrew 
         pagetitle="Meet your crew"
         pagenumber="02"
         element="glidecrew"
        />
      </Layout>
   )
}

export default CrewPage