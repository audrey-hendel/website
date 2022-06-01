import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./links"
import Logo from "./logo"

const Navigation = styled.nav`
  height: 100px;
  display: flex;
  background-color: #f5eff4;
  position: relative;
  
  @media (max-width: 767px) {
    height: fit-content;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  align-self: center;
  cursor: pointer;
  padding: 0 30px;
  position: absolute;
  right: 0;
  @media (max-width: 767px) {
    display: flex;
  }
`

const NavBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 767px) {
    flex-direction: column;
    height: fit-content;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    padding: 30px 30px 40px;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 100px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Lang = styled.span`
display: none;
@media(min-width: 1024px) {
  display: inline;
  align-self: center;
}
`
const Container = styled.div`
  max-width: 1312px;
  display: flex;
  height: 100px;
  z-index: 5;
  margin: 0 auto;
  width: 100%;
  padding: 24px 32px;
`

const Navbar = (path) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
    <Container>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavBox>
          <NavbarLinks p={path} />
        </NavBox>
      ) : (
        <NavBox open>
          <NavbarLinks p={path} />
        </NavBox>
      )}
      <Lang style={{color: "#F04191"}}>International</Lang>
    </Container>
  </Navigation>
  )
}

export default Navbar
