import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
//import decoration from '../src/images/decoration-4.png'

const TitleOuter = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  margin-top: -100px;
  padding: 170px 20px 100px;
  background: rgba(240, 128, 179, 0.07);
  .decor {
    width: auto;
    height: auto;
    }
    .gatsby-image-wrapper img {
      height: auto;
    }
  h1 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 1.4;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
  }
`

const Title = (p) => {
 return (
  <TitleOuter>
      <StaticImage src='../images/decor.png' alt="decoration" className="decor"/>
        <h1>{p.text}</h1>
      <StaticImage src='../images/decor.png' alt="decoration" className="decor"/>
  </TitleOuter>)
}
export default Title
