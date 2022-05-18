import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '../../components/getImageByName'
const SlideshowContainer = styled.div`
  text-align: center;
`
const Slide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Gallery = (props) => {
  return (
    <section>
      <h2>Gallery</h2>
      <div>
        {props.gallery.map((sld, i) => {
          return (
            <div key={"slide-"+i}>
              {sld.slide.map(pict => {
                return (
                  <GatsbyImage image={GetImageByName(pict.image)} alt="gallery image" key={pict.image} />
                )
              })}
            </div>)
        })}
      </div>
    </section>
  )
}

export default Gallery