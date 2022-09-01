import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from './getImageByName'
import dataHome from '~data/home.yml'
import dataNav from '~data/navigation.yml'

const PageFooter = styled.footer`
position: relative;
bottom: 0;
  padding: 30px 20px;
  font-family: 'Damion';
  font-style: normal;
  font-weight: 400;
  background: #CFE8C0;
  margin-top: 30px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {

  }
  h2 {
    color: rgba(240, 65, 145, 0.8);
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.08em;
  }
  p, a {
    color: rgba(51, 51, 51, 0.8);
    font-size: 16px;
    margin-bottom: 5px;
    @media (min-width: 500px){
    }
  }
  img{
    width: 40px;
    height: auto;
    @media (min-width: 768px){
      width: 60px;
    }
  }
`
const FooterGrid = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const Col = styled.div`

`
const Copy = styled.p`
  text-align: center;
  margin: 40px auto 0;
  padding-bottom: 30px;
`
const Footer = () => {
  return (
    <PageFooter>
      <FooterGrid>
        <Col>
          <Link to="/">
            <GatsbyImage image={GetImageByName("om-rose-.png")} alt="gallery image" />
          </Link>
        </Col>
        <Col>
          <h2>Navigation Menu</h2>
          {dataNav.items.map((item, i) => {
            return (
              <p key={'link' + i}>
                <Link to={item.link}>
                  {item.label}
                </Link>
              </p>
            )
          })}
        </Col>
        <Col>
          <h2>Contact Details</h2>
          {dataHome.contact.text.map((t, i) => {
            return (
              <p key={'cont' + i}>{t}</p>
            )
          })}
        </Col>
        <Col>
          <h2>LET’S BE HAPPY!</h2>
          {dataHome.footer.map((t, i) => {
            return (
              <p key={'cont' + i}>{t}</p>
            )
          })}
        </Col>
      </FooterGrid>
      <Copy>© {new Date().getFullYear()} &middot; All rights reserved.</Copy>
    </PageFooter>
  )
}
export default Footer