import React, { useState } from "react"
import Links from "./links"
import GetImageByName from "./getImageByName"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
//import decoration from '../src/images/decoration-4.png'

const TitleOuter = styled.div`
  display: flex;
  height: 100px;
  .title {
    width: 60px;
    height: auto;
    }
`
const Nav = styled.nav`
  display: flex;
`
const Toggle = styled.div``
const Navbox = styled.div``
const Hamburger = styled.div``

const Title = (p) => {
 return (
  <TitleOuter>
      <StaticImage src='../images/decoration-4.png' alt="decoration" className="decor"/>
        <h1>{p.text}</h1>
      <StaticImage src='../images/decoration-4.png' alt="decoration" className="decor"/>
  </TitleOuter>)
}
export default Title
