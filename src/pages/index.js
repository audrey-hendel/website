import * as React from "react"
import Layout from "~components/layout"
import styled from 'styled-components'
import Seo from "~components/seo"
import Gallery from "~components/gallery"
import Hero from "~sections/home/hero"
import About from "~sections/home/about"
import Distance from "~sections/home/distance"
import Contact from "~sections/home/contact"
import pageData from "~data/home.yml"

const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 30px 30px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    z-index: 1;
  }
`
const DecoOuter = styled.div`
  position: relative;
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 30px 30px;
  padding: 2px;
  background: linear-gradient(transparent, pink);
  @media (min-width: 1024px) {
    border-radius: 0 0 50px 50px;
    margin-bottom: -110px;
    z-index: 2;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 40px 0;
  border-radius: 30px 30px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;

  .center {
    margin: 0 auto;
    img{
      width: 60%;
      margin: 0 auto;
    }
    @media (min-width: 500px) {
      img{
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 1024px){
    border-radius: 50px 50px 0 0;
    padding: 60px 0;
    }
`
const DecoInner = styled.div`
  display: flex;
  padding: 0 0 40px;
  border-radius: 0 0 30px 30px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 1024px){
    border-radius: 0 0 50px 50px;
    padding: 60px 0;}
`

const IndexPage = () => (
  <Layout path="/">
    <Seo title="Home" />
    <Hero />
    <About about={pageData.about_section} />
    <Gallery gallery={pageData.gallery} decor_gallery={pageData.decor_gallery}/>
      <DecoOuterTop>
        <DecoInnerTop>
        </DecoInnerTop>
      </DecoOuterTop>
    <Distance distance={pageData.distance} />
    <DecoOuter>
        <DecoInner>
        </DecoInner>
    </DecoOuter>
    <Contact contact={pageData.contact} />
  </Layout>
)

export default IndexPage
