import React from "react"
import { Link } from "gatsby"
import Navigation from "../data/navigation.yml"
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

const Navs = () => {
  const Items = Navigation.map((item, i) => {
    return (
      <div className="menuItem" key={"link-"+i}>
        <Link to={item.link} >
          {item.label}
        </Link>
      </div>
    )
  })
  return <Nav className="top_nav hidden_small">{Items}</Nav>
}

export default Navs
