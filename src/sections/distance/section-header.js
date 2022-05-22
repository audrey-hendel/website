import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const SectionTitle = styled.div`
  display: grid;
`
const SectionHeader = (p) => {
return (
  <SectionTitle>
       <GatsbyImage image={GetImageByName(p.image)} alt="title image" />
        {p.title?<h2>{p.title}</h2>:null}
  </SectionTitle>
)}

export default SectionHeader