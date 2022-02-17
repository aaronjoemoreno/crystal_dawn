import React from "react"
import { Hero } from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { About } from "../components/About"

const IndexPage = () => {
  return(
    <Layout>
      <Seo title="Home" />
      <Hero/>
      <About/>
    </Layout>
  )
}

export default IndexPage