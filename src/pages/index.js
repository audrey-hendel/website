import * as React from "react"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Gallery from "~components/gallery"
import Hero from "~sections/home/hero"
import About from "~sections/home/about"
import Distance from "~sections/home/distance"
import Contact from "~sections/home/contact"
import pageData from "~data/home.yml"


const IndexPage = () => (
  <Layout path="/">
    <Seo title="Home" />
    <Hero />
    <About about={pageData.about_section} />
    <Gallery gallery={pageData.gallery} decor_gallery={pageData.decor_gallery}/>
    <Distance distance={pageData.distance} />
    <Contact contact={pageData.contact} />
  </Layout>
)

export default IndexPage
