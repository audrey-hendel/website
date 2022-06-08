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
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: -20px;
  @media ( min-width: 1024px){
    margin: 0;
    margin-bottom: -35px;
  }
  h2 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 0.9;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    z-index: 2;
    margin-top: -50px;
    margin-bottom: 0;
    @media ( min-width: 500px){
      margin: 30px 0;
      font-size: 60px;
      line-height: 0.9;
    }
  }
  h3{
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 55px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
    margin-top: -10px;
    @media ( min-width: 500px){
      font-size: 40px;
      margin-top: 20px;
    }
  }
  img{
    width: 75%;
    margin: 0 auto;
    @media ( min-width: 500px){
      width: 100%;
    }
  }


  a {
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
    text-decoration: none;
    margin-top: 0;
    @media (min-width: 500px){
      font-size: 22px;
      line-height: 34px;
      margin-top: 30px;
    }

  }
  .center {
    margin: 0 auto;
    img{
      width: 60%;
      margin: 0 auto;
    }
    @media (min-width: 500px) {
      img{
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`
const DecoOuterTop = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    width: 95%;
    margin-bottom: 110px;
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
  padding: 40px 0;
  border-radius: 50px 50px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;

  .center {
    margin: 0 auto;
    img{
      width: 60%;
      margin: 0 auto;
    }
    @media (min-width: 500px) {
      img{
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 1024px){
    padding: 60px 0;
    }
`
const DecoInner = styled.div`
  display: flex;
  padding: 40px 0;
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
  font-size: 14px;
    @media (min-width: 500px){
      padding: 20px;
      font-size: 22px;
    }
`
const CardsGrid = styled.div`
  display: grid;
  @media (min-width: 1024px) {
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
    <>

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
                <h3 to={sld.image}>{sld.label}</h3>
              </Card>)
          })}
        </CardsGrid>
        <Link to={props.distance.cta_link} className="buttonCta">{props.distance.cta_label}</Link>

      </DistanceBox>
      <DecoOuter>
        <DecoInner>
        </DecoInner>
      </DecoOuter>
    </>
  )
}

export default Distance