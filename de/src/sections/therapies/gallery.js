import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import DecorCenter from '~components/decorCenter'
import { useStaticQuery, graphql } from "gatsby"

const SlideshowContainer = styled.section`
  margin-top: 80px;
  text-align: center;
    font-family: 'Damion';
    font-weight: 400;
    font-size: 25px;
    line-height: 1.36;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
    @media (min-width: 1024px){
      margin-top: 157px;
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
  const data = useStaticQuery(graphql`
  query terGalData {
    dataYaml(page: {eq: "therapies"}) {
      gallery_text
    }
  }
`)
  return (
    <SlideshowContainer>
      <DecorCenter image='decoration-4.png' className="center"/>
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.gallery_text }} className="center headLines" />

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
    </SlideshowContainer>
  )
}

export default Gallery