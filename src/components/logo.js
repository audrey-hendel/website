import React from "react"
import { Link } from "gatsby"
import GetImageByName from "./getImageByName"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const LogoOuter = styled.div`
  z-index: 5;
  align-self: center;
  .Logo {
    width: 40px;
    heigh: auto;
    @media (min-width: 768px){
      width: 60px;
      height: auto;
      }
    }
`

const Logo = (path) => {
  return (
    <LogoOuter>
      <Link to="/">
        <GatsbyImage image={GetImageByName("om-rose-.png")} alt="logo" className="Logo" />
      </Link>
    </LogoOuter>
  )
}
export default Logo
