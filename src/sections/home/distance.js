import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
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
    font-size: 60px;
    line-height: 0.9;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    z-index: 2;
  }
  a {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 34px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.8);
    text-decoration: none;
  }
  .center {
    margin: 0 auto;
  }
`
const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    margin-bottom: -110px;
    z-index: 1;
  }
`
const DecoOuter = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 50px 50px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    margin-bottom: -110px;
    z-index: 2;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 50px 50px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;

  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px){
    padding: 60px 0;}
`
const DecoInner = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 0 0 50px 50px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 1024px){
    padding: 60px 0;}
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
  const data = useStaticQuery(graphql`
  query DistanceData {
    dataYaml(page: {eq: "home"}) {
      distance{
          title
          text
          three_t{
            label
            image
          }
        cta_label
      }
    }
  }
`)

  const decorCenter = GetImageByName(props.distance.decor_center)

  return (
      <DistanceBox>
      <DecoOuterTop>
        <DecoInnerTop>
        </DecoInnerTop>
      </DecoOuterTop>
        <h2>{props.distance.title}</h2>
        <GatsbyImage image={decorCenter} alt='decor' className='center' />
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
        <DecoOuter>
        <DecoInner>
        </DecoInner>
      </DecoOuter>
      </DistanceBox>
    
  )
}

export default Distance