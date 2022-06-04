import * as React from "react"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Tables from "~sections/prices/tables"
import Detail from "~sections/prices/detail"
import pageData from "~data/prices.yml"


const Prices = () => (
  <Layout path="/prices">
    <Seo title="Prices" />
    <Title text={pageData.title} />
    <Tables />
    <Detail/>
  </Layout>
)

export default Prices
