import * as React from "react"
import Title from "~components/title"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout path="/testimonials">
    <Seo title="Page two" />
    <Title text='Coming soon!' />
  </Layout>
)

export default SecondPage
