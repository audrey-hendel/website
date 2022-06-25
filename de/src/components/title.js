import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
//import decoration from '../src/images/decoration-4.png'

const TitleOuter = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px;
  margin-top: -100px;
  padding: 147px 20px 83px;
  align-items: center;
  background: rgba(240, 128, 179, 0.07);
  @media (min-width: 425px){
    padding: 185px 20px 115px;
    gap: 20px;
  }
  @media (min-width: 768px){
    gap: 33px;
  }
  .decor {
    min-width: 70px;
    height: auto;
    margin-top: 8px;
    width: 100%;

    @media (min-width: 768px){
      width: auto;
      height: auto;
    }

    }
    .gatsby-image-wrapper img {
      height: auto;
    }
  h1 {
    text-align: center;
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    margin-bottom: 0;
    @media (min-width: 425px){
      font-size: 40px;
    }
    @media (min-width: 600px){
      font-size: 50px;
      line-height: 1.4;
    }
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
