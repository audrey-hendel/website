import React from 'react'
//import styled from 'styled-components'
//import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'


const DecorCenter = (p) => {
  return <GatsbyImage image={GetImageByName(p.image)} />
}
export default DecorCenter