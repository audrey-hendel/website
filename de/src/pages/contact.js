import * as React from "react"
import styled from 'styled-components'
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import ContactForm from "~sections/contact/contact_form"
import Contact from "~sections/contact/contacts_block"
import homeData from "~data/home.yml"

const ContactGrid = styled.section`
  display: grid;
  max-width: 1264px;
  padding: 20px;
  margin-top: -110px;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin: -30px auto;
  }
  .center {
    display: block;
    margin: 5px auto 15px;

    img{
      width: 60%;
      margin: 0 auto;
    }
    @media (min-width: 500px) {
      margin-bottom: 30px;
      img{
        width: 100%;
        margin: 0 auto;
      }
    }
    @media (min-width: 800px){
      display: none;
    }
  }
`
const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  margin-top: -30px;

  @media (min-width: 1024px) {
    margin-top: -50px;
    z-index: 2;
  }
`
const DecoOuter = styled.div`
  position: relative;
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 50px 50px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    margin-bottom: -75px;
    z-index: 2;
  }
`
const DecoInner = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 0 0 50px 50px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 780px){
    padding: 60px 0;}
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 50px 50px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 40px 0;
  .center {
    margin: 0 auto;
  }
`
const ContactPage = () => (
  <Layout path="/contact">
    <Seo title="Contact" />
    <Title text="Contact" />
    <DecoOuterTop>
      <DecoInnerTop>
      </DecoInnerTop>
    </DecoOuterTop>
    <ContactGrid>
      <Contact contact={homeData.contact} />
      <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
      <ContactForm/>
    </ContactGrid>
    <DecoOuter>
        <DecoInner>
        </DecoInner>
      </DecoOuter>
  </Layout>
)

export default ContactPage
