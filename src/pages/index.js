import * as React from "react"
import Layout from "~components/layout"
import Seo from "~components/seo"
import Hero from "~sections/home/hero"
import About from "~sections/home/about"
import Gallery from "~sections/home/gallery"
import Distance from "~sections/home/distance"
import Contact from "~sections/home/contact"
import homeData from "~data/home.yml"


const IndexPage = () => (
  <Layout path="/">
    <Seo title="Home" />
    <Hero />
    <About about={homeData.about_section} />
    <Gallery gallery={homeData.gallery} decor_gallery={homeData.decor_gallery}/>
    <Distance distance={homeData.distance} />
    <Contact contact={homeData.contact} />
  </Layout>
)

export default IndexPage
