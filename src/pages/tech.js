import React from "react"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import CarouselTech from "../components/organisms/CarouselTech"

const TechPage = () => {  
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="Technology | Space Tourism"
         />
        <CarouselTech 
         pagetitle="Space Launch 101"
         pagenumber="03"
         element="glidetech"
        />
      </Layout>
   )
}

export default TechPage