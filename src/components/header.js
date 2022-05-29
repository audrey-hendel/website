import React, { useState } from "react"
import { Link } from "gatsby"
import Links from "~components/links"
import GetImageByName from "./getImageByName"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const NavOuter = styled.header`
  max-width: 1312px;
  display: flex;
  height: 100px;
  z-index: 5;
  background: #f7f0f5;
  .Logo {
    width: 60px;
    height: auto;
    }
`
const Nav = styled.nav`
  display: flex;
  z-index: 5;
`
const Toggle = styled.div`
z-index: 5;
`
const Navbox = styled.div`
z-index: 5;
`
const Hamburger = styled.div`
z-index: 5;
`

const Header = (path) => (
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

    <Links p={path} />

    <span style={{color: "#F04191"}}>International</span>
    
  </NavOuter>
)

export default Header
