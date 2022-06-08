import React from 'react'
import styled from 'styled-components'
import SectionHeader from "~sections/distance/section-header"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import pageData from "~data/distance-healing.yml"
import { useStaticQuery, graphql } from "gatsby"

const DistHeal = styled.article`
  max-width: 1190px;
  margin: 0 auto;
  padding: 20px 15px;
  @media (min-width: 425px){
      padding: 20px 30px;
    }
  @media (min-width: 768px){
      padding: 70px 70px 30px;
    }

    h2{
      font-size: 30px;
      line-height: 34px;
      letter-spacing: 0.08em;
      color: rgba(51, 51, 51, 0.8);
      @media (min-width: 500px){
        font-size: 40px;
        line-height: 55px;
      }
    }
  h3 {
    margin-top: 20px;
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
    @media (min-width: 500px){
      margin-top: 40px;
      font-size: 30px;
    }
  }
  .entryZoom{
    color: rgba(51, 51, 51, 0.34);
    font-size: 16px;
    margin-bottom: 10px;
    @media (min-width: 500px){
      font-size: 18px;
      margin-bottom: 18px;
    }

  }
  .logoBlack{
    margin-bottom: 40px;
  }
  .access_text{
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #333333;
    @media (min-width: 500px){
      font-size: 22px;
      line-height: 28px;
    }

  }
  img{
    width: 171px;
    height: auto;
    margin: 0 auto;
    @media (min-width: 500px){
      width: auto;
    }
  }

`
const DistWrapper = styled.div`
  width: 100%;
  background: rgba(240, 128, 179, 0.07);
  padding: 26px 0;
  margin-bottom: -50px;
  margin-top: -50px;
  @media (min-width: 768px){
    padding: 100px 0;
    margin-bottom: -50px;
  }
  @media (min-width: 1024px){
    margin-top: 0;
  }
`

const Table = styled.div`
max-width: 1150px;
margin: 0 auto;
justify-content: stretch;
  display: grid;
`
const RowTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    padding: 20px;
    text-align: center;
    font-size: 10px;
    margin: 0;
    border-bottom: 3px solid rgba(240, 65, 145, 0.35);
    @media (min-width: 768px){
    font-size: 20px;
  }
  }
  p:nth-child(1) {
      border-right: 3px solid rgba(240, 65, 145, 0.35);
  }
  @media (min-width: 768px){
    font-size: 20px;
  }
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  p {
    font-size: 12px;
    padding: 15px;
    text-align: center;
    margin: 0;
    border-bottom: 3px solid rgba(240, 65, 145, 0.35);
  }
  p:nth-child(odd) {
      border-right: 3px solid rgba(240, 65, 145, 0.35);
      font-family: 'Damion';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.375;
      letter-spacing: 0.08em;
      color: rgba(51, 51, 51, 0.6);
    }
  @media (min-width: 768px) {
    p:nth-child(odd) {
      font-weight: 400;
      font-size: 40px;
    }
    p{
      font-size: 25px;
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
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    margin-top: -20px;
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
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    padding: 60px 0;
  }
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
  @media (min-width: 1024px) {
    padding: 60px 0;
    border-radius: 0 0 50px 50px;
  }
`

const PriceRow = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 1fr;
p {
  margin: 0;
  padding: 8px 5px;
  font-size: 14px;
  @media (min-width: 500px){
    padding: 8px 10px;
    font-size: 18px;
  }
  @media (min-width: 768px){
    padding: 8px 24px;
    font-size: 22px;
  }
}
i{
  font-size: 14px;
  margin-left: -50px;
  @media (min-width: 768px){
  margin-left: -10px;
  font-size: 18px;
  }
  &::before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(240, 65, 145, 0.05);
    box-shadow: 0px 0px 6px 1px rgba(240, 65, 145, 0.24);
    margin-left: -21px;
    margin-top: 8px;
  }
}
`

const Access = () => {
  const data = useStaticQuery(graphql`
  query distData {
    dataYaml(page: {eq: "distance-healing"}) {
      access {
        text_1
        text_2
        title
      }
      join_team {
        text_1
        text_2
        title
      }
      support {
        text_1
        text_2
        title
      }
    }
  }
`)
  return (
    <>
      <DecoOuterTop>
        <DecoInnerTop>
        </DecoInnerTop>
      </DecoOuterTop>
    <DistHeal>
      <SectionHeader
        title={pageData.access.title}
        image={pageData.access.image}
      />
      <h3>{pageData.access.subtitle}</h3>

      <Table>
      <RowTitle>
        <p>Name</p>
        <p>Biography</p>
      </RowTitle>
        {pageData.access.team.map((m, i) => {
          return (
            <Row>
              <p>{m.name}</p>
              <p>{m.bio}</p>
            </Row>
          )
        })}

      <h3>Price in euros</h3>
      </Table>

      <Table style={{
        borderTop: "3px solid #C4C4C4",
        borderBottom: "3px solid #C4C4C4",
        padding: "20px 0"
      }} >
        {pageData.access.prices.map((r,i) => {
          return (
            <PriceRow key={'pr-'+i}>
              <p>{r.text}</p>
              <p>{r.time}</p>
              <p>{r.price}</p>
            </PriceRow>
          )
        })}
        <PriceRow>
          <p/><p/><i>All Tax Include</i>
        </PriceRow>
      </Table>

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_1 }} className="access_text" />
      <p className='entryZoom'>Entry Zoom</p>

      <GatsbyImage image={GetImageByName('logo-black.png')} alt='decor' className='logoBlack' />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_2 }} className="access_text" />
      </DistHeal>
      <DecoOuter>
        <DecoInner>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
        </DecoInner>
      </DecoOuter>
      <DistWrapper>
      <DistHeal>
      <SectionHeader
        title={pageData.join_team.title}
        image={pageData.join_team.image}
      />
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_1 }} className="access_text" />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_2 }} className="access_text" />
      </DistHeal>
      </DistWrapper>
      <DecoOuterTop>
        <DecoInnerTop>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
        </DecoInnerTop>
      </DecoOuterTop>
      <DistHeal>

      <SectionHeader
        title={pageData.support.title}
        image={pageData.support.image}
      />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.support.text_1 }} className="access_text" />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.support.text_2 }} className="access_text" />

    </DistHeal>
    <DecoOuter>
        <DecoInner>
        </DecoInner>
    </DecoOuter>
    </>
  )
}

export default Access