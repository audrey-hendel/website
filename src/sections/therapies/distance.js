import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import DecorCenter from '~components/decorCenter'
import { useStaticQuery, graphql } from "gatsby"


const TerGrid = styled.div`
  text-align: left;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  width: 95%;
  padding: 20px;
  @media (min-width: 500px){
    padding: 60px;
  }
  @media (min-width: 768px) {
    padding: 60px 20px;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
  }
  li, a, p {
    text-align: left;
  }
  li{
    font-size: 14px;
    @media (min-width: 500px){
      font-size: 22px;
      line-height: 28px;
    }
  }
  h2 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.8);
    @media (min-width: 500px){
      color: rgba(51, 51, 51, 0.5);
      font-size: 35px;
      line-height: 40px;
    }
  }
  h3{
    display: none;
    @media (min-width: 500px){
      font-size: 22px;
      line-height: 25px;
    }

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
  @media (min-width: 1024px) {
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
  position: relative;
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 30px 30px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  margin-top: -30px;
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    margin-top: -50px;
    z-index: 2;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 30px 30px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px){
    border-radius: 50px 50px 0 0;
    padding: 60px 0;}
`
const DecoOuter = styled.div`
  position: relative;
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
    padding: 15px 0;
  }
`
const TerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: start;


  img {
    width: 140px;
    margin: 0 auto;
    @media (min-width: 500px){
      display: block;
      width: auto;
      height: auto;
      margin: auto;
    }
  }
  &:nth-child(1) {
    &::before {
        content: "";
        background: url(/images/decor-dog.png);
        position: absolute;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 140px;
        height: 150px;
        margin-top: -55px;
        @media(min-width: 375px){
          margin-left: 25px;
        }
        @media( min-width: 500px){
          width: 180px;
          height: 190px;
        }
        @media (min-width: 640px){
          margin-left: 80px;
        }
        @media (min-width: 768px){
          margin-left: -25px;
        }
        @media (min-width: 1024px) {
          margin-left: 20px;
        }
        @media (min-width: 1210px) {
          width: 240px;
          height: 250px;
          margin-top: -90px;
          margin-left: -30px;
        }
      }
    @media (min-width: 1024px){
    padding-right: 20px;
    }
    &::after{
      display: none;
      @media (min-width: 1024px){
        content: "";
        border: 3px solid rgba(240, 65, 145, 0.35);
        border-radius:50px;
        position: absolute;
        height: 430px;
        left: 50%;
        transform: translate (-50%);
        top: 95%;
      }
    }
  }
  &:nth-child(2) {
    &::before {
        content: "";
        background: url(/images/decor-horse.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100%;
        width: 238px;
        height: 145px;
        margin-top: 55px;
        margin-left: 54px;
        @media (min-width: 375px){
          margin-left: 85px;
        }
        @media (min-width: 425px){
          margin-left: 140px;
        }
        @media (min-width: 500px){
          margin-left: 190px;
          margin-top: 135px;
        }
        @media (min-width: 650px){
          margin-left: 250px;
        }
        @media (min-width: 768px){
          margin-left: 120px;
        }
        @media (min-width: 815px){
          margin-left: 160px;
        }
        @media (min-width: 1210px){
          width: 322px;
          height: 145px;
          margin-top: 95px;
          margin-left: 230px;
        }
      }
    @media (min-width: 1024px) {
      padding-left: 50px;
    }
  }


`

const Content = styled.div`
    padding: 20px;
    max-width: 1328px;
    margin: 0 auto;
    background: rgba(240, 128, 179, 0.07);
    border-radius: 0;
    font-family: 'Sitka';
    font-style: normal;
    font-size: 14px;
    line-height: 1.27;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: rgba(51, 51, 51, 0.8);
    margin-bottom: 0;
    @media (min-width: 500px){
      font-size: 22px;
      margin-bottom: 30px;
      padding: 50px 25px;

    }
    @media (min-width: 768px){
      padding: 50px 80px;
    }
    @media (min-width: 1350px){
      border-radius: 30px;
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