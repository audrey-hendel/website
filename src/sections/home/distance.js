import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '../../components/getImageByName'
import { Link } from 'gatsby'
const SlideshowContainer = styled.div`
  text-align: center;
`
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
const DistanceText = styled.div`
  margin: 0 auto;
  max-width: 920px;
  padding: 20px;
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

const Distance = (props) => {
  return (
    <DistanceBox>
      <h2>{props.distance.title}</h2>
      <DistanceText>{props.distance.text}</DistanceText>
      <CardsGrid>
        {props.distance.three_t.map((sld, i) => {
          return (
            <Card key={"thr" + i} >
              <GatsbyImage image={GetImageByName(sld.image)} alt="gallery image" />
              <Link to={sld.image}>{sld.label}</Link>
            </Card>)
        })}
      </CardsGrid>
      <Link to={props.distance.cta_link} className="buttonCta">{props.distance.cta_label}</Link>
    </DistanceBox>
  )
}

export default Distance