import * as React from "react"
import { graphql } from "gatsby"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Details from "~sections/prices/details"
import Tables from "~sections/prices/tables"
import pageData from "~data/prices.yml"


const Prices = ({data}) => {
  return (
  <Layout path="/prices">
    <Seo title="Prices" />
    <Title text={pageData.title} />
    <Tables />
    <Details details={data.dataYaml.details}/>
  </Layout>)
}
export const query = graphql`
  query PricesQuery {
    dataYaml(page: {eq: "prices"}) {
      details
    }
  }
`
export default Prices
