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
  padding: 0 15px;

  @media (min-width: 425px){
      padding: 20px 30px;
  }
  @media (min-width: 768px){
      padding: 0 70px 30px;
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

  .access_text{
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #333333;
    .pink {
      color: #F04191;
    }
    .featured_text {
      line-height: 1.2;
      text-align: center;
      b {
        font-size: 2rem;
        font-weight: 500;
      }
      i {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
      }
    }
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
  padding: 80px 0;
  margin-bottom: -50px;
  margin-top: -50px;
  @media (min-width: 768px){
    padding: 150px 0;
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
  margin-top: -30px;
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    margin-top: -50px;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 40px 0;
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
const EntryZoom = styled.a`
  cursor: pointer;
  display: block;
  padding: 5px;
  height: fit-content;
  width: fit-content;
  margin-bottom: 40px;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 4px 5px 7px #ddd;
  &:hover{
    border: 1px solid #ccc;
    box-shadow: 4px 5px 7px #d898c8;
  }
`
const Access = () => {
  const data = useStaticQuery(graphql`
  query distData {
    join: markdownRemark(
      frontmatter: {page: {eq: "distance-healing"}, section: {eq: "join_team"}}
    ) {
      html
    }
    support: markdownRemark(
      frontmatter: {page: {eq: "distance-healing"}, section: {eq: "support"}}
    ) {
      html
    }
    dataYaml(page: {eq: "distance-healing"}) {
      access {
        text_1
        text_2
        title
        zoom
      }
      join_team {
        title
      }
      support {
        title
      }
    }
  }
`)

  return (
    <>
      <DecoOuterTop>
        <DecoInnerTop/>
      </DecoOuterTop>
      <DistHeal className="itemHeal" style={{ marginTop: "-50px" }} >
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
          {pageData.access.prices.map((r, i) => {
            return (
              <PriceRow key={'pr-' + i}>
                <p>{r.text}</p>
                <p>{r.time}</p>
                <p>{r.price}</p>
              </PriceRow>
            )
          })}
          <PriceRow>
            <p /><p /><i>All Tax Include</i>
          </PriceRow>
        </Table>
        
        <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_1 }} className="access_text" />
        <p className='entryZoom'>Entry Zoom</p>
        <EntryZoom href={data.dataYaml.access.zoom} rel="noreferer" target="_blank" title="Click to entry ZOOM">
          <GatsbyImage image={GetImageByName('logo-black.png')} alt='decor' />
        </EntryZoom>
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
          <div dangerouslySetInnerHTML={{ __html: data.join.html }} className="access_text" />
        </DistHeal>
      </DistWrapper>
      <DecoOuterTop>
        <DecoInnerTop>
          <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
        </DecoInnerTop>
      </DecoOuterTop>
      <DistHeal className="itemHeal">

        <SectionHeader
          title={pageData.support.title}
          image={pageData.support.image}
        />

        <div dangerouslySetInnerHTML={{ __html: data.support.html }} className="access_text" />

      </DistHeal>
      <DecoOuter>
        <DecoInner/>
      </DecoOuter>
    </>
  )
}

export default Access