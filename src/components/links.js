import React from "react"
import { Link } from "gatsby"
import Navigation from "../data/navigation.yml"
import styled from 'styled-components'

const Nav = styled.nav`
  gap: 20px;
  .menuItem a {
    font-family: 'Damion', cursive;
    color: #F04191;
    text-decoration: none;
    font-size: 20px;
  }
    @media (min-width: 920px) {
  display: flex;}
`

const Links = () => {
  const navSorted = () => {
    return (
    Navigation.sort((a,b) =>  a.order-b.order ))
  }
  const Items = navSorted().map((item, i) => {
    return (
      <div className="menuItem" key={"linki-"+i}>
        <Link to={item.link} >
          {item.label}
        </Link>
      </div>
    )
  })
  return <Nav className="top_nav hidden_small">{Items}</Nav>
}

export default Links
