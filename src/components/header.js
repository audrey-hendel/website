import React, { useState } from "react"
import { Link } from "gatsby"
import Links from "./links"
import GetImageByName from "./getImageByName"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const NavOuter = styled.header`
  display: flex;
  height: 100px;
  .Logo {
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

const Header = () => (
  <NavOuter
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link to="/">
      <GatsbyImage image={GetImageByName("om-rose-.png")} alt="logo" className="Logo"/>
    </Link>

    <Links />

    <span style={{color: "#F04191"}}>International</span>
    
  </NavOuter>
)

export default Header
