import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '../../components/getImageByName'

const Intro = styled.p`
  text-align: center;
`
const AboutBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const About = (p) => {

  const Therapies = () => {
    let image1 = GetImageByName(p.about.therapies.items[0].image)
    let image2 = GetImageByName(p.about.therapies.items[1].image)
    return (
      <div>
        <div>
          <h3>{p.about.therapies.items[0].title}</h3>
          <GatsbyImage image={image1} alt='decor' />
        </div>
        <div>
          <h3>{p.about.therapies.items[1].title}</h3>
          <GatsbyImage image={image2} alt='decor' />
        </div>
      </div>
    )
  }
  const avatar = GetImageByName(p.about.about_box.image)
  const decorCenter = GetImageByName(p.about.decor_center)
  const decoeSide = GetImageByName(p.about.decor_left)
  const image_1 = GetImageByName(p.about.image_1)
  const image_2 = GetImageByName(p.about.image_2)

  return (
    <section>
      <GatsbyImage image={decorCenter} alt='decor' />
      <Intro>{p.about.intro}</Intro>
      <div>
        <GatsbyImage image={decoeSide} alt='decor' />
        <GatsbyImage image={image_1} alt='decor' />
        <GatsbyImage image={image_2} alt='decor' />
        <GatsbyImage image={decoeSide} alt='decor' />
      </div>
      <AboutBox>
        <GatsbyImage image={avatar} alt='Auddrey' />
        <div>
          <h2>{p.about.about_box.name}</h2>
          <h3>{p.about.about_box.title}</h3>
          <p>{p.about.about_box.text}</p>
        </div>
      </AboutBox>
      <h2>{p.about.therapies.title}</h2>
      <GatsbyImage image={decorCenter} alt='decor' />
      <Link to={p.about.therapies.cta_link}>{p.about.therapies.cta_label}</Link>
      <GatsbyImage image={decorCenter} alt='decor' />
      <Therapies />
    </section>
  )
}

export default About