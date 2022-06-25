import React from "react"
import { Link } from "gatsby"
import Navigation from "~data/navigation.yml"
import styled from 'styled-components'

const Nav = styled.nav`
@media(max-width: 767px){
  background-color: #fff;
  }
  background-color: transparent;
  gap: 20px;
  .menuItem a {
    font-family: 'Damion', cursive;
    color: rgba(51, 51, 51, 0.8);  
    text-decoration: none;
    font-size: 1.8rem;
    &.active {
      color: #F04191;
    }
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
    @media (min-width: 768px) {
  display: flex;
  font-size: 20px;
  }
`

const Links = (p, {open}) => {
  const path = p.p.path
  const navSorted = () => {
    return (
    Navigation.items.sort((a,b) =>  a.order-b.order ))
  }
  const Items = navSorted().map((item, i) => {
    return (
      <div className="menuItem" key={"link-"+i}>
        {(path===item.link)?<Link to={item.link} className="active"
        >
          {item.label}
        </Link>:<Link to={item.link} 
        >
          {item.label}
        </Link>}
      </div>
    )
  })
  return <Nav className="top_nav hidden_small" open={open} >{Items}</Nav>
}

export default Links
