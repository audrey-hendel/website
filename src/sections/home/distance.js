import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '../../components/getImageByName'
import { Link } from 'gatsby'
const SlideshowContainer = styled.div`
  text-align: center;
`
const Slide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Distance = (props) => {
  return (
    <section>
      <h2>{props.distance.title}</h2>
      <>{props.distance.text}</>
      <div>
        {props.distance.three_t.map((sld, i) => {
          return (
            <div key={"thr" + i} >
              <GatsbyImage image={GetImageByName(sld.image)} alt="gallery image" />
              <Link to={sld.image}>{sld.label}</Link>
            </div>)
        })}
      </div>
      <Link to={props.distance.cta_link}>{props.distance.cta_label}</Link>
    </section>
  )
}

export default Distance