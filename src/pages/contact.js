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

const ContactPage = () => (
  <Layout path="/contact">
    <Seo title="Contact" />
    <Title text="Contact" />
    <ContactGrid>
      <Contact contact={homeData.contact} />
      <ContactForm/>
    </ContactGrid>
  </Layout>
)

export default ContactPage
