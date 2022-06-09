import * as React from "react"
import PropTypes from "prop-types"
import Footer from "~components/footer"
import NavBar from "./navbar"
import "./layout.css"

const Layout = ({ children, path }) => {

  return (
    <>
      <NavBar path={path} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
