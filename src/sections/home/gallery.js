import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SlideshowContainer = styled.section`
  text-align: center;
  h2 {
    font-family: 'Damion';
    font-weight: 400;
    font-size: 60px;
    line-height: 1.2;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
  }
`
const Slide = styled.div`
  width: 95%;
  max-width: 1112px;
  margin: 60px auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  .slideItem {
    border-radius: 16px;
  }
  .slideItem:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  .slideItem:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .slideItem:nth-child(3) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .slideItem:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 4fr 3fr;
    gap: 22px;
  .slideItem:nth-child(1) {
    grid-column: 1/2;
    grid-row: 2/6;
  }
  .slideItem:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/4;
  }
  .slideItem:nth-child(3) {
    grid-column: 2/3;
    grid-row: 4/7;
  }
  .slideItem:nth-child(4) {
    grid-column: 3/4;
    grid-row: 2/6;
  }
  }

`

const Gallery = (props) => {
  return (
    <SlideshowContainer>
      <h2>Gallery</h2>
      <Carousel
             showArrows={false} 
             showStatus = {false}
             showThumbs = {false}
             >
        {props.gallery.map((sld, i) => {
          return (
            <Slide key={"slide-" + i} className="slideBox">
              {sld.slide.map(pict => {
                return (
                  <GatsbyImage image={GetImageByName(pict.image)} alt="gallery image" key={pict.image} 
                    className="slideItem"
                  />
                )
              })}
            </Slide>)
        })}
      </Carousel>
    </SlideshowContainer>
  )
}

export default Gallery