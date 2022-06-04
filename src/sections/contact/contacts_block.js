import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const ContactOuter = styled.div`
  position: relative;
`
const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    margin-bottom: -100px;
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


const ContactGrid = styled.div`
  position: relative;
  font-family: 'Damion';
  font-style: normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.8);
  margin: 30px auto;
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
  font-size: 25px;
  line-height: 1.36;
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