import * as React from "react"
import styled from 'styled-components'
import Layout from "~components/layout"
import Seo from "~components/seo"
import Title from "~components/title"
import ContactForm from "~sections/contact/contact_form"
import Contact from "~sections/contact/contacts_block"
import homeData from "~data/home.yml"

const Figure = styled.div`
  position: absolute;
  top: 10%;
  height: 100%;
  width: 100%;
  background: rgba(240, 128, 179, 0.04);
  border-top: 1px solid rgba(240, 65, 145, 0.47);
  border-bottom: 1px solid rgba(240, 65, 145, 0.47);
  @media (min-width: 1024px) {
    height: 80%
  }
`
const ContactGrid = styled.section`
  display: grid;
  max-width: 1264px;
  margin: 50px auto;
  padding: 20px;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`
const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    margin-top: -20px;
    z-index: 2;
  }
`
const DecoOuter = styled.div`
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
  @media (min-width: 1024px){
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

  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px){
    padding: 60px 0;}
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
      <ContactForm/>
    </ContactGrid>
    <DecoOuter>
        <DecoInner>
        </DecoInner>
      </DecoOuter>
  </Layout>
)

export default ContactPage
