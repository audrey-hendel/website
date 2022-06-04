import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import DecorCenter from '~components/decorCenter'
import { useStaticQuery, graphql } from "gatsby"


const TerGrid = styled.div`
  text-align: center;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  width: 95%;
  @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;}
  li, a, p {
    text-align: left;
  }
  li{
    font-size: 22px;
  }
  h2 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
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
  @media (min-width: 1440px) {
    max-width: 1264px;
    padding: 77px 75px;
    .content {
    padding: 50px 80px;
    max-width: 1328;
    margin: 0 auto;
    background: rgba(240, 128, 179, 0.07);
    border-radius: 30px;
  }
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
    margin-bottom: -125px;
    margin-top: -50px;
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
const DecoOuter = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 50px 50px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    margin-bottom: -75px;
    z-index: 2;
  }
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
    padding: 15px 0;}
`
const TerCard = styled.div`
  display: grid;
  justify-content: center;
  align-content: start;
  grid-template-rows: fit-content auto;
  gap: 39px;
  &:nth-child(1) {
    @media (min-width: 1024px){
    padding-right: 20px;
    }
    &::after{
      @media (min-width: 1024px){
        content: "";
        border: 3px solid rgba(240, 65, 145, 0.35);
        border-radius:50px;
        position: absolute;
        height: 550px;
        left: 50%;
        transform: translate (-50%);
        top: 85%;
      }
    }
  }
  &:nth-child(2){
    @media (min-width: 1024px){
      padding-left: 60px;
    }

  }

  img {
    display: block;
    width: auto;
    height: auto;
    margin: 0 auto;
  }

`
const Content = styled.div`
    padding: 50px 25px;
    max-width: 1328px;
    margin: 0 auto;
    background: rgba(240, 128, 179, 0.07);
    border-radius: 30px;
    font-family: 'Sitka';
    font-style: normal;
    font-size: 16px;
    line-height: 1.27;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: rgba(51, 51, 51, 0.8);
    margin-bottom: 30px;
    @media (min-width: 1024px){
      padding: 50px 80px;
      font-size: 22px;
    }
    
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
    <DecoOuterTop>
        <DecoInnerTop>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
        </DecoInnerTop>
    </DecoOuterTop>
    <TerGrid>
      <TerCard>
          <StaticImage src='../../images/dog.png' alt="gallery image" />
          <div dangerouslySetInnerHTML={{ __html: data.dataYaml.col1 }} className="AboutText" />
        </TerCard>
        <TerCard>
          <StaticImage src='../../images/horse.png' alt="gallery image" />
          <div dangerouslySetInnerHTML={{ __html: data.dataYaml.col2 }} className="AboutText" />
      </TerCard>
    </TerGrid>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.content }} />
    </Content>
    <DecoOuter>
        <DecoInner>
        <DecorCenter image='decoration-4.png' />
        </DecoInner>
    </DecoOuter>
    </>
  )
}

export default Distance