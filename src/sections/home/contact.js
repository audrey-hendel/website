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

const Contact = (props) => {
  return (
    <section>
      <h2>Contact</h2>
      <div>
      <GatsbyImage image={GetImageByName(props.contact.image)} alt="contact image" />
      </div>
      <div>
        {props.contact.text.map((s, i) => {
          return (
            <p key={"k-"+i}>
             {s}
            </p>)
        })}
      </div>
    </section>
  )
}

export default Contact