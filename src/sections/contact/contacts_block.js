import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const ContactOuter = styled.div`
  position: relative;
`

const ContactGrid = styled.div`
  position: relative;
  font-family: 'Damion';
  font-style: normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.8);
  margin: 30px auto 0;
  display: grid;
  width: 95%;
  max-width: 584px;
  justify-items: center;
  text-align: center;
  h2 {
    font-weight: 400;
    font-size: 60px;
    line-height: 1.2;
    letter-spacing: 0.08em;
    align-self: end;
    margin: 0 0 0 -25px;
  }
`
const Logo = styled.div`
  @media(min-width: 768px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`
const Contacts = styled.div`
  font-size: 14px;
  @media (min-width: 500px){
    font-size: 25px;
    line-height: 1.36;
  }
  p{
    margin-bottom: 10px;
    @media (min-width: 500px){
      margin-bottom: 24px;
    }
  }
`
const Contact = (props) => {
  return (

    <ContactOuter>
      <ContactGrid>
        <Logo>
        <GatsbyImage image={GetImageByName('logo-contact.png')} alt="contact image" />
        </Logo>
        <Contacts>
          {props.contact.text.map((s, i) => {
            return (
              <p key={"k-" + i}>
                {s}
              </p>)
          })}
        </Contacts>
      </ContactGrid>
    </ContactOuter>

  )
}

export default Contact