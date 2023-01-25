import * as React from "react"
import Layout from "~components/layout"
import styled from "styled-components"
import Seo from "~components/seo"
import Gallery from "~components/gallery"
import Hero from "~sections/home/hero"
import About from "~sections/home/about"
import Distance from "~sections/home/distance"
import Contact from "~sections/home/contact"
import pageData from "~data/home.yml"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from "~components/getImageByName"

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
    img {
      width: 60%;
      margin: 0 auto;
    }
    @media (min-width: 500px) {
      img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    border-radius: 0 0 50px 50px;
    padding: 60px 0;
  }
`

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const CenterBlock = styled.div`
  text-align: center;
`

const LogoContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
`

const StyledHeadline = styled.h1`
  @font-face {
    font-family: "Blair ITC";
    src: url("blair_itc_medium.ttf") type(truetype);
  }
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  letter-spacing: 0.25rem;
  font-family: "Blair ITC";
`

const StyledTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Damion";
  font-size: 2.5rem;
  font-weight: normal;
  color: rgb(250, 62, 153);
`

const ContactDetail = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const PlaceholderText = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const IndexPage = () => (
  <LayoutContainer>
    <CenterBlock>
      <LogoContainer>
        <GatsbyImage image={GetImageByName("girl.png")} alt="Logo" />
      </LogoContainer>
      <StyledHeadline>Let`s be happy</StyledHeadline>
      <StyledTitle>Audrey Hendel</StyledTitle>
      <ContactDetail>Konradstraße 7, 08056 Zwickau, Deutschland</ContactDetail>
      <ContactDetail>mail@letbehappy.com</ContactDetail>
      <ContactDetail>+49 157 788 720 81</ContactDetail>
      <PlaceholderText>
        Die Website befindet sich gerade im Aufbau. Wir sind bald soweit.
      </PlaceholderText>
    </CenterBlock>
  </LayoutContainer>
  // <Layout path="/">
  //    <Seo title="Home" />
  //   <Hero />
  //   <About about={pageData.about_section} />
  //   <Gallery gallery={pageData.gallery} decor_gallery={pageData.decor_gallery}/>
  //     <DecoOuterTop>
  //       <DecoInnerTop>
  //       </DecoInnerTop>
  //     </DecoOuterTop>
  //   <Distance distance={pageData.distance} />
  //   <DecoOuter>
  //       <DecoInner>
  //       </DecoInner>
  //   </DecoOuter>
  //   <Contact contact={pageData.contact} />
  // </Layout>
)

export default IndexPage
