import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const DistanceBox = styled.div`
  display: grid;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  h2 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
  }
  a {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.8);
    text-decoration: none;
  }
`
const CardsGrid = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const Card = styled.div`
  display: grid;
  justify-content: center;
`

const Details = () => {
  const data = useStaticQuery(graphql`
  query detailsData {
    dataYaml(page: {eq: "therapies"}) {
      details
    }
  }
`)
  return (
    <>
    <DistanceBox>
    <div dangerouslySetInnerHTML={{ __html: data.dataYaml.details }} className="AboutText" />
    </DistanceBox>
    </>
  )
}

export default Details