import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from "~components/getImageByName"

const DistanceBox = styled.div`
  padding: 40px 20px;
  max-width: 1332px;
  margin: 25px auto 30px;
  background: rgba(240, 128, 179, 0.07);
  border-radius: 0px;
  font-size: 14px;
  @media (min-width: 500px) {
    font-size: 18px;
    margin: 70px auto;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    padding: 40px 80px;
  }
  @media (min-width: 1360px) {
    border-radius: 30px;
  }
  a {
    font-family: "Damion";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.8);
    text-decoration: none;
  }
`
const Title = styled.h2`
  font-family: "Damion";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.08em;
  color: rgba(240, 65, 145, 0.8);
  margin: 0;
  @media (min-width: 500px) {
    font-size: 25px;
    line-height: 26px;
  }
`
const Centered = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 25px;
  @media (min-width: 500px) {
    margin-top: 50px;
  }
  @media (min-width: 1024px) {
    margin-top: 150px;
  }
  img {
    width: 25%;
    margin: 0 auto;
    @media (min-width: 500px) {
      width: 50%;
    }
  }
`
const Intro = styled.div`
  margin: 0;
  align-self: center;
  text-align: center;
  font-family: "Damion";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: rgba(51, 51, 51, 0.6);
  margin-bottom: 10px;
  color: yellow;
  margin-top: 30px;
  padding: 0 10px;
  @media (min-width: 500px) {
    margin-top: 70px;
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 31px;
  }
`

const Decor = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-row: 1fr 1fr 1fr 1fr;
      gap: 10px;
      padding: 0px 10px;
      margin-top: -42px;
      img{
        width: 100%;
        height: auto;
      }
      .decImg-1 {
        grid-column: 1/2;
        transform: rotate(125deg);
        margin-left: -20px;
        z-index: -2;
        margin-bottom: -34px;
      }
      .decImg-2 {
        grid-row: 2/3;
        grid-column: 1/2;
      }
      .decImg-3 {
        grid-row: 2/3;
        grid-column: 2/3;
      }
      .decImg-4{
        grid-row: 3/4;
        grid-column: 1/2;
      }
      .decImg-5{
        grid-row: 3/4;
        grid-column: 2/3;
      }
      .decImg-6{
        grid-row: 4/4;
        grid-column: 2/3;
        margin-top: -34px;
        transform: rotate(300deg);
        z-index: -2;
      }
      @media (min-width: 500px){
        margin-top: -54px;
        padding: 0 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-row: 1fr 1fr 1fr;
        .decImg-1 {
          grid-column: 1/2;
          transform: rotate(125deg);
          margin-left: -20px;
          z-index: -2;
          margin-bottom: -34px;
        }
        .decImg-2 {
          grid-row: 2/3;
          grid-column: 1/2;
        }
        .decImg-3 {
          grid-row: 2/3;
          grid-column: 2/3;
        }
        .decImg-4{
          grid-row: 2/3;
          grid-column: 3/4;
        }
        .decImg-5{
          grid-row: 2/3;
          grid-column: 4/5;
        }
        .decImg-6{
          grid-row: 3/4;
          grid-column: 4/5;
          margin-top: -34px;
          transform: rotate(300deg);
          z-index: -2;
        }
      }
      @media (min-width: 1024px){
        gap: 20px;
        padding: 0 50px;
      }
`

const Detail = () => {
  const data = useStaticQuery(graphql`
    query detailData {
      dataYaml(page: { eq: "prices" }) {
        details
      }
    }
  `)
  const decorSide = GetImageByName("star-decor.png")
  const image_1 = GetImageByName("e1.png")
  const image_2 = GetImageByName("e2.png")
  const image_3 = GetImageByName("e4.png")
  const image_4 = GetImageByName("e5.png")

  return (
    <>
      <Centered>
        <GatsbyImage
          image={GetImageByName("logo-leaves-circle-150x150.png")}
          alt="decor"
          className="center"
        />
      </Centered>
      <Title>+details</Title>
      <DistanceBox>
        <div
          dangerouslySetInnerHTML={{ __html: data.dataYaml.details }}
          className="AboutText"
        />
      </DistanceBox>
      <Intro>When sunbeams of transformation arise, enjoy the process…</Intro>
      <Decor>
        <GatsbyImage image={decorSide} alt="decor" className="decImg-1" />
        <GatsbyImage image={image_1} alt="decor" className="decImg-2" />
        <GatsbyImage image={image_2} alt="decor" className="decImg-3" />
        <GatsbyImage image={image_3} alt="decor" className="decImg-4" />
        <GatsbyImage image={image_4} alt="decor" className="decImg-5" />
        <GatsbyImage image={decorSide} alt="decor" className="decImg-6" />
      </Decor>
    </>
  )
}

export default Detail
