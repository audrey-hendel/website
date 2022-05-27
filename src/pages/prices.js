import * as React from "react"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Tables from "~sections/prices/tables"
import Details from "~sections/therapies/details"
import pageData from "~data/prices.yml"


const Prices = () => (
  <Layout path="/prices">
    <Seo title="Prices" />
    <Title text={pageData.title} />
    <Tables />
    <Details/>
  </Layout>
)

export default Prices
