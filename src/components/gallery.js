import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = (props) => {
  const decor_gallery = GetImageByName(props.decor_gallery)
  console.log(props);
  return (
    
    <SlideshowContainer>
      <DecGallery className="decorTop" > 
        <GatsbyImage image={decor_gallery} alt='decorGallery' />
      </DecGallery>
      <h2>Gallery</h2>
      { props.gallery_text ? <div dangerouslySetInnerHTML={{ __html: props.gallery_text }} className="center headLines" /> : "" }
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
      <DecGallery className="decorBottom" > 
        <GatsbyImage image={decor_gallery} alt='decorGallery' />
      </DecGallery>
    </SlideshowContainer>
  )
}

export default Gallery

const SlideshowContainer = styled.section`
  text-align: center;
  h2 {
    font-family: 'Damion';
    font-weight: 400;
    font-size: 35px;
    line-height: 1.2;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    @media (min-width: 500px) {
      font-size: 60px;
    }
  }

  .headLines {
    margin-top: 30px;
    padding: 0 20px;
    p {
      font-size: 18px;
      margin-bottom: 0;
      letter-spacing: -0.01em;
      @media (min-width: 500px){
        font-size: 25px;
        letter-spacing: 0.08em;
    }
    }

    p:nth-child(3) {
     color: rgba(240, 65, 145, 0.8);
    }
  }

`
const DecGallery = styled.div`
    margin: 0 auto;
    position: relative;
    width: 400px;
    height: 200px;

  &.decorTop{
    display: none;
    margin: 0;
    top: 0;
    left: 0;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  &.decorBottom{
    display: none;
    margin: 0 0 0 auto;
    bottom: 0;
    right: 0;
    @media (min-width: 1024px) {
      display: block;
      transform: rotate(180deg)
    }
  }

`
const Slide = styled.div`
  width: 95%;
  max-width: 1112px;
  margin: 0px auto 60px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 50px; 
  @media (min-width: 500px){
    margin: 60px auto;
    padding-bottom:70px; 
  }

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