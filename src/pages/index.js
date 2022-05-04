import React from "react"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import HeroHome from "../components/organisms/HeroHome"

const IndexPage = () => {  
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="Home | Space Tourism"
            keywords=""
         />
        <HeroHome 
         title="SPACE"
         subtitle="So, you want to travel to"
         description="Let's face it; if you want to go to space, you
         might as well genuinely go to outer space and not hover kind
         of on the edge of it. Well sit back, and relax because we'll
         give you a truly out of this world experience!"
        />
      </Layout>
   )
}

export default IndexPage