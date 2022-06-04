import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const DistanceBox = styled.div`
  padding: 40px 25px;
  max-width: 1332px;
  margin: 70px auto;
  background: rgba(240, 128, 179, 0.07);
  border-radius: 30px;
  font-size: 16px;
  @media (min-width: 768px) {
    padding: 40px 80px;
    font-size: 22px;
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
`
const Title = styled.h2`
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(240, 65, 145, 0.8);
    margin: 0;
`
const Centered = styled.div`
width: fit-content;
margin: 0 auto;
img{
  width: 50%;
  margin: 0 auto;
}
`
const Details = () => {
  const data = useStaticQuery(graphql`
  query detailsData {
    dataYaml(page: {eq: "therapies"}) {
      details
    }
  }
`)
  return (
    <>
    <Centered>
    <GatsbyImage image={GetImageByName('logo-leaves-circle-150x150.png')} alt='decor' className='center' />
    </Centered>
    <Title>+details</Title>
    <DistanceBox>
    <div dangerouslySetInnerHTML={{ __html: data.dataYaml.details }} className="AboutText" />
    </DistanceBox>
    </>
  )
}

export default Details