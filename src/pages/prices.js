import * as React from "react"
import { graphql } from "gatsby"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Details from "~sections/prices/details"
import Tables from "~sections/prices/tables"


const Prices = ({data}) => {
  return (
  <Layout path="/prices">
    <Seo title="Prices" />
    <Title text={data.details.frontmatter.title} />
    <Tables tables={data.tables.html} />
    <Details details={data.details.html}/>
  </Layout>)
}
export const query = graphql`
  query PricesQuery {
    details: markdownRemark(
      frontmatter: {page: {eq: "prices"}, section: {eq: "details"}}) 
    {
      html
      frontmatter {
        title
      }
    }
    tables: markdownRemark(
      frontmatter: {page: {eq: "prices"}, section: {eq: "tables"}}) 
    {
      html
      frontmatter {
        title
      }
    }
  }
`
export default Prices
