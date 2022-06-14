import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

const DistanceBox = styled.div`
  display: grid;
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  margin-bottom: -20px;
  margin-top: -60px;
  @media ( min-width: 1024px){
    margin-bottom: -35px;
  }
  h2 {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 0.9;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    z-index: 2;
    margin: 0;
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
    line-height: 24px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
    margin-top: -10px;
    @media ( min-width: 500px){
      font-size: 40px;
      line-height: 55px;
      margin-top: 20px;
    }
  }
  img{
    width: 57%;
    margin: 0 auto;
    height: auto;
    @media ( min-width: 500px){
      width: 80%;
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

const DistanceText = styled.div`
  margin: 0 auto;
  max-width: 920px;
  font-family: 'Sitka';
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  @media (min-width: 500px){
    font-size: 22px;
    line-height: 28px;
  }
  p{
    margin-bottom: 10px;
    @media (min-width: 500px){
      margin-bottom: 24px;
    }
  }
  .fd1 {
    color: rgba(240, 65, 145, 0.8);
  }
  .fd2 {
    color: rgba(51, 51, 51, 0.6);
  }
    @media (min-width: 500px){
      padding: 20px;
      font-size: 22px;
    }
`
const CardsGrid = styled.div`
  display: grid;
  
  max-width: 1440px;
    margin: 0 auto;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1150px) {
    gap: 50px;
  }
  @media (min-width: 1300px) {
    gap: 100px;
  }
`
const Card = styled.div`
  display: grid;
  justify-content: center;
`
const Distance = (props) => {
  const data = useStaticQuery(graphql`
  query DistQuery {
    markdownRemark(frontmatter: {page: {eq: "home"}}) {
      html
    }
  }
  `)

  const decorCenter = GetImageByName(props.distance.decor_center)

  return (
    <>
      <DistanceBox>
        <h2>{props.distance.title}</h2>
        <GatsbyImage image={decorCenter} alt='decor' className='center' />
        <DistanceText>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </DistanceText>
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
    </>
  )
}

export default Distance