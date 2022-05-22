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

const Distance = () => {
  const data = useStaticQuery(graphql`
  query distanceData {
    dataYaml(page: {eq: "therapies"}) {
      id
      title
      col1
      col2
      content
    }
  }
`)
  return (
    <>
    <DistanceBox>
      <CardsGrid>
        <Card  >
          <StaticImage src='../../images/img1.png' alt="gallery image" />
          <div dangerouslySetInnerHTML={{ __html: data.dataYaml.col1 }} className="AboutText" />
        </Card>
        <Card  >
          <StaticImage src='../../images/horse.png' alt="gallery image" />
          <div dangerouslySetInnerHTML={{ __html: data.dataYaml.col2 }} className="AboutText" />
        </Card>
      </CardsGrid>
    </DistanceBox>
    <div dangerouslySetInnerHTML={{ __html: data.dataYaml.content }} className="AboutText" />
    </>
  )
}

export default Distance