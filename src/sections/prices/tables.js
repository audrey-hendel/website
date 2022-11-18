import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import "./tables.css"

const Tables = () => {
  const data = useStaticQuery(graphql`
    query pricePageQuery {
      markdownRemark(frontmatter: {page: {eq: "prices"}}) {
        html
      }
    }
  `)
  return (
    <>
    <DecoOuterTop>
        <DecoInnerTop/>
      </DecoOuterTop>
  <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="price_table" />
     <DecoOuter style={{marginBottom: `30px`}}>
        <DecoInner/>
     </DecoOuter>
  </>
  )
}

export default Tables

const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 30px 30px 0 0;
  padding: 2px;
  margin-top: -30px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    margin-top: -50px;
    z-index: 2;
  }
`
const DecoOuter = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 30px 30px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    border-radius: 0 0 50px 50px;
    margin-bottom: -75px;
    z-index: 2;
  }
`
const DecoInner = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 0 0 30px 30px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 1024px){
    border-radius: 0 0 50px 50px;
    padding: 35px 0;}
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 30px 30px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 60px 0;
  @media (min-width: 1024px){
    border-radius: 50px 50px 0 0;}
`