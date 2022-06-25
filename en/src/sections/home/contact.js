import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const ContactOuter = styled.div`
  position: relative;
`
const Rectangle = styled.div`
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
const ContactGrid = styled.div`
  position: relative;
  font-family: 'Damion';
  font-style: normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.8);
  margin: 60px auto;
  display: grid;
  width: 95%;
/*max-width: 1060px;*/
  justify-items: center;
  @media (min-width: 500px){
    margin: 150px auto 100px;
  }
  @media (min-width: 1024px) {
    margin: 250px auto 0;
  }
  
  h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: 0.08em;
    align-self: end;
    margin: 0 0 0 -25px;
    @media(min-width: 500px){
      font-size: 60px;
    }
  }
  p{
    font-size: 14px;
    margin-bottom: 5px;
    @media (min-width: 500px){
      margin-bottom: 24px;
      font-size: 25px;
    }
  }
  @media(min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 40% auto;
      gap: 20px;
      justify-content: center;
      h2 {
        grid-row: 1/2;
        grid-column: 2/3;
      }
    }
  }
`
const Logo = styled.div`
  width: 100%;
  @media(min-width: 768px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  @media(min-width: 768px) {
    width: 150%;
  }
  @media(min-width: 1210px) {
    width: 935px;
  }
`
const Contacts = styled.div`
  font-size: 25px;
  line-height: 1.36;
  @media(min-width: 768px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
`
const Contact = (props) => {
  return (
    <ContactOuter>
      <Rectangle />
      <ContactGrid>
        <Logo>
          <GatsbyImage image={GetImageByName(props.contact.image)} alt="contact image" />
        </Logo>
        <h2>Contact</h2>
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