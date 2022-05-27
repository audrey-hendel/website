import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "~components/title"
import Gallery from "../sections/therapies/gallery"
import Distance from "../sections/therapies/distance"
import Details from "~sections/therapies/details"
import pageData from "~data/therapies.yml"

const Therapies = () => (
  <Layout path="/therapies">
    <Seo title="Therapies" />
    <Title text={pageData.title} />
    <Distance/>
    <Gallery gallery={pageData.gallery} />
    <Details/>
  </Layout>
)

export default Therapies
