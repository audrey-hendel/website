import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const Details = (details, decor) => {
  const [detailsOpen, setDetailsOpen] = useState(false)

const decorSide = GetImageByName("star-decor.png")
const image_2 = GetImageByName("d2.png")
const image_3 = GetImageByName("d3.png")

  return (
    <>
    <Centered>
    <GatsbyImage image={GetImageByName('logo-leaves-circle-150x150.png')} alt='decor' className='center' />
    </Centered>
      <Title 
        detailsOpen={detailsOpen}
        onClick={() => setDetailsOpen(!detailsOpen)}>
        {detailsOpen ? '-details' : '+details'}
      </Title>
      {detailsOpen ? <DistanceBox open > 
    <div dangerouslySetInnerHTML={{ __html: details.details }} className="AboutText" />
    </DistanceBox> : <DistanceBox> 
    <div dangerouslySetInnerHTML={{ __html: details.details }} className="AboutText" />
    </DistanceBox>}
    <Intro>Let´s call the spirits of Happiness!</Intro>
    <Decor>
      <GatsbyImage image={decorSide} alt="decor" className="decImg-1" />
      <GatsbyImage image={image_2} alt="decor" className="decImg-2" />
      <GatsbyImage image={image_3} alt="decor" className="decImg-3" />
      <GatsbyImage image={decorSide} alt="decor" className="decImg-4" />
    </Decor>
    </>
  )
}

export default Details

const DistanceBox = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  padding: 0 20px;
  max-width: 1332px;
  margin: 40px auto 0;
  background: rgba(240, 128, 179, 0.07);
  border-radius: 0px;
  font-size: 14px;
  @media(min-width: 500px){
    padding: 40px 25px;
    margin: 70px auto 0;
  }

  @media (min-width: 768px) {
    padding: 40px 80px;
    font-size: 22px;
  }

  @media (min-width: 1350px) {
    border-radius: 30px;
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

  p{
    margin-bottom: 10px;
    @media (min-width: 500px){
      margin-bottom: 24px;
    }
  }

`
const Title = styled.h2`
    cursor: pointer;
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(240, 65, 145, 0.8);
    margin: 0;
    @media (min-width: 500px){
      font-size: 25px;
      line-height: 26px;
  }

`
const Centered = styled.div`
width: fit-content;
margin: 0 auto;
img{
  width: 25%;
  margin: 0 auto;
  @media (min-width: 500px){
    width: 50%;
  }
}

`
const Intro = styled.p`
  margin: 0;
  align-self: center;
  text-align: center;
  font-family: 'Damion';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: rgba(51, 51, 51, 0.6);
  margin-bottom: 10px;
  color: yellow;
  margin-top: 30px;
  @media (min-width: 500px){
    margin-top: 70px;
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 31px;
  }

`
const Decor = styled.div`
  display: grid;
  padding: 20px;
  row-gap: 0;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: -40px 0 -30px;
  overflow: hidden;
  .decImg-1 {
    grid-column: 1/2;
    transform: rotate(125deg);
    margin-left: -20px;
    z-index: -2;
    margin-bottom: -34px;
    img{
        width: 100%;
        height: auto;
      }
  }

  .decImg-2 {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  .decImg-3 {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .decImg-2, .decImg-3{
    border-radius: 16px;
  }

  .decImg-4{
    grid-row: 3/4;
    grid-column: 2/3;
    margin-top: -34px;
    transform: rotate(300deg);
    z-index: -2;
    @media (min-width: 1024px){
      grid-column: 4/4;
    }

    img{
    width: 100%;
     height: auto;
  }
  }

  @media (min-width: 768px) {
    .decImg-1, .decImg-4{
      margin-left: 72px;
    }
  }

  @media (min-width: 950px) {
    gap: 20px;
    grid-template-columns: 1.5fr 2fr 2fr 1.5fr;
    margin-top: 0;
    margin: 0px 0 100px;
    .decImg-1 {
    transform: rotate(72deg);
    }

    .decImg-2 {
      grid-row: 1/2;
      grid-column: 2/3;
    }

    .decImg-3 {
      grid-row: 1/2;
      grid-column: 3/4;
    }

    .decImg-4 {
      grid-row: 1/2;
      grid-column: 4/5;
      transform: rotate(-110deg);
    }

    .decImg-1, .decImg-4{
      margin-left: 0;
    }
  }

  @media (min-width: 1024px) {
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

`
