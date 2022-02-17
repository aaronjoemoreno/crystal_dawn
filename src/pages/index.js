import * as React from "react"
import Header from '../components/Header'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { About } from "../components/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header siteTitle="Crystal Dawn"/>
    <About/>
  </Layout>
)

export default IndexPage
