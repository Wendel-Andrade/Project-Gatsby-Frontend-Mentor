import React from "react"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import HeroDestination from "../components/organisms/HeroDestination"

const DestinationPage = () => {  
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="Destination | Space Tourism"
         />
        <HeroDestination 
         pagetitle="Pick your destination"
         pagenumber="01"
        />
      </Layout>
   )
}

export default DestinationPage