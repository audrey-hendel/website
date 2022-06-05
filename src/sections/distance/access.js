import React from 'react'
import styled from 'styled-components'
import SectionHeader from "~sections/distance/section-header"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import pageData from "~data/distance-healing.yml"
import { useStaticQuery, graphql } from "gatsby"

const DistHeal = styled.article`
  max-width: 1190px;
  padding: 20px;
  margin: 0 auto;
  &:nth-child(2){
    margin-top: 120px;
  }
  h3 {
    margin-top: 40px;
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.25;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
  }
  .access_text{
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.03em;
    color: #333333;
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
  p {
    padding: 20px;
    text-align: center;
    font-size: 20px;
    margin: 0;
    border-bottom: 3px solid rgba(240, 65, 145, 0.35);
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    p:nth-child(1) {
      border-right: 3px solid rgba(240, 65, 145, 0.35);
    }
  }
`
const Row = styled.div`
  display: grid;
  p {
    padding: 15px;
    text-align: center;
    margin: 0;
    border-bottom: 3px solid rgba(240, 65, 145, 0.35);
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    p:nth-child(odd) {
      border-right: 3px solid rgba(240, 65, 145, 0.35);
      font-family: 'Damion';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 1.375;
      letter-spacing: 0.08em;
      color: rgba(51, 51, 51, 0.6);
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
    margin-bottom: -100px;
    margin-top: -20px;
    z-index: 2;
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
  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px){
    padding: 60px 0;}
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
const PriceRow = styled.div`
display: grid;
margin-bottom: 16px;
p {
  margin: 0;
  @media (min-width: 768px) {
  padding: 8px 24px;
  font-size: 22px;
  }
}
i {
  font-size: 18px;
  padding-left: 21px;
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
@media (min-width: 768px) {
  grid-template-columns: 3fr 1fr 1fr;
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
        padding: "20px"
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

      {/* Zoom button  */}

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_2 }} className="access_text" />
      </DistHeal>
      <DecoOuter>
        <DecoInner>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
        </DecoInner>
      </DecoOuter>
      <DistHeal>
      <SectionHeader
        title={pageData.join_team.title}
        image={pageData.join_team.image}
      />
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_1 }} className="access_text" />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_2 }} className="access_text" />
      </DistHeal>
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