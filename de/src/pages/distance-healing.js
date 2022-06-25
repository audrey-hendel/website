import * as React from "react"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Access from "~sections/distance/access"
import pageData from "~data/distance-healing.yml"

const Prices = () => (
  <Layout path="/distance-healing">
    <Seo title={pageData.title} />
    <Title text={pageData.title} />
    <Access />
  </Layout>
)

export default Prices
