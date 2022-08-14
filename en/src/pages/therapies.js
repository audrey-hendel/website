import * as React from "react"
import { graphql } from "gatsby"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import Gallery from "~components/gallery"
import Details from "~sections/therapies/details"
import Distance from "~sections/therapies/distance"
import pageData from "~data/therapies.yml"




const Therapies = ({data}) => {
return (
  <Layout path="/therapies">
    <Seo title="Therapies" />
    <Title text={pageData.title}/>
    <Distance />
    <Gallery gallery={pageData.gallery} decor_gallery={pageData.decor_gallery}/>
    <Details details={data.dataYaml.details} decor={data.dataYaml.decor} />
  </Layout>)
}
export const query = graphql`
query TherapiesPageQuery {
  dataYaml(page: {eq: "therapies"}) {
    details
  }
}
`
export default Therapies
