import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const SectionTitle = styled.div`
  display: grid;
  img {
    width: 252px;
    height: auto;
    margin: 50px auto 0;
  }
  h2 {
    text-align: center;
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.6);
  }
`
const SectionHeader = (p) => {
return (
  <SectionTitle>
       {p.image?<GatsbyImage image={GetImageByName(p.image)} className="center" alt="title image" />:null}
        {p.title?<h2>{p.title}</h2>:null}
  </SectionTitle>
)}

export default SectionHeader