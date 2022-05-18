import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./navigation"
import GetImageByName from "./getImageByName"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const NavOuter = styled.header`
display: flex;
`
const Nav = styled.nav`
  display: flex;
`
const Header = ({ siteTitle }) => (
  <NavOuter
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <GatsbyImage image={GetImageByName("om-rose-.png")} alt="logo" />
    </Link>
      <Navigation />
    <span>International</span>
  </NavOuter>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
