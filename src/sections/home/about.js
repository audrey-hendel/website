import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from "~components/getImageByName"
import { useStaticQuery, graphql } from "gatsby"

const AboutSection = styled.section`
  display: grid;
  justify-content: center;
  padding-top: 60px;
  gap: 20px;
  .center {
    margin: 0 auto;
  }
`
const Intro = styled.p`
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  font-family: "Sitka";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  color: #333333;
`
const Decor = styled.div`
  display: grid;
  padding: 20px;
  gap: 26px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .decImg-1 {
    grid-template-row: 1/2;
  }
`
const AboutBox = styled.div`
  padding: 10px;
  max-width: 1440px;
  margin: 70px auto 0;
  display: grid;
  gap: 20px;
  @media (min-width: 1024px) {
    grid-template-columns: 5fr 7fr;
    gap: 0;
    padding: 56px;
  }
  .gatsby-image-wrapper {
    border-radius: 24px;
    @media (min-width: 768px) {
      grid-row: 1/3;
    }
  }
  h2 {
    font-size: 50px;
    font-family: "Damion", cursive;
    color: #f04191;
    font-weight: 400;
    grid-row: 1/2;
    @media (min-width: 1024px) {
      display: none;
    }
  }
`
const AboutText = styled.div`
  position: relative;
  padding: 10px;
  border-radius: 30px;
  h2 {
    font-size: 50px;
    font-family: "Damion", cursive;
    color: #f04191;
    font-weight: 400;
    display: none;
    margin-top: 42px;
  }
  h3 {
    color: rgba(51, 51, 51, 0.5);
    margin: 42px 0;
    font-size: 25px;
    font-family: "Sitka";
  }
  @media (min-width: 1024px) {
    h2 {
      display: block;
    }
    padding: 60px 60px 60px 120px;
    &:before {
      content: "";
      position: absolute;
      top: -56px;
      bottom: -56px;
      left: -112px;
      right: -56px;
      background: rgba(221, 161, 192, 0.1);
      border-radius: 30px;
      box-shadow: 1px 4px 5px rgba(51, 51, 51, 0.05);
    }
  }
`
const DecoOuterTop = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    margin-bottom: -100px;
    margin-top: -20px;
    z-index: 2;
  }
`
const DecoOuter = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 50px 50px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    margin-bottom: -75px;
    z-index: 2;
  }
`
const DecoInner = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 0 0 50px 50px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 50px 50px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;

  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`

const Therapies = styled.div`
  display: grid;
  background: rgba(240, 128, 179, 0.07);
  padding: 20px;
  @media (min-width: 1024px) {
    padding: 142px 20px 60px;
  }
`
const TerTitle = styled.h2`
  margin: 0 auto;
  font-family: "Damion", cursive;
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.5);
  letter-spacing: 0.08em;
`
const TerSub = styled.div`
  margin: 0 auto;
  font-family: "Damion", cursive;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.15;
  color: rgba(51, 51, 51, 0.5);
  letter-spacing: 0.08em;
  white-space: pre-wrap;
  &:nth-child(1) {
    width: 50%;
  }
  &:nth-child(2) {
    width: 70%;
  }
`
const TerGrid = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    :60px ;
    margin-top: 60px;
  }
`
const TerCard = styled.div`
  display: grid;
  justify-content: center;
  gap: 39px;

  img {
    display: block;
    width: auto;
    height: auto;
    margin: auto;
    &:nth-child(1) {
      &::before {
        content: "";
        background-image: url(/images/decor-dog.png);
        width: 300px;
        height: 300px;
        position: absolute;
      }
    }
  }
  &:nth-child(1) {
    &::before {
        content: "";
        background: url(/images/decor-dog.png);
        position: absolute;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 180px;
        height: 190px;
        margin-top: -71px;
        margin-left: 20px;
        @media (min-width: 1210px) {
          width: 240px;
          height: 250px;
          margin-top: -90px;
          margin-left: -30px;
        }
      }
    @media (min-width: 1024px) {
      &::after {
        content: "";
        border: 3px solid rgba(240, 65, 145, 0.35);
        border-radius: 50px;
        position: absolute;
        height: 343px;
        left: 50%;
        transform: translate (-50%);
      }
    }

    .decorImage {
      order: -1;
    }
    @media (min-width: 768px) {
      .decorImage {
        order: 2;
      }
    }
  }
  &:nth-child(2) {
    &::before {
        content: "";
        background: url(/images/decor-horse.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100%;
        width: 238px;
        height: 145px;
        margin-top: 120px;
        margin-left: 220px;

        @media (min-width: 1210px){
          width: 322px;
          height: 145px;
          margin-top: 95px;
          margin-left: 230px;
        }
      }
    @media (min-width: 1024px) {
      padding-left: 50px;
    }
  }
`

const About = p => {
  const data = useStaticQuery(graphql`
    query aboutData {
      dataYaml(page: { eq: "home" }) {
        about_section {
          about_box {
            text
            title
            name
            image
          }
        }
      }
    }
  `)

  const avatar = GetImageByName(p.about.about_box.image)
  const decorCenter = GetImageByName(p.about.decor_center)
  const decoeSide = GetImageByName(p.about.decor_left)
  const image_1 = GetImageByName(p.about.image_1)
  const image_2 = GetImageByName(p.about.image_2)
  const image1 = GetImageByName(p.about.therapies.items[0].image)
  const image2 = GetImageByName(p.about.therapies.items[1].image)

  return (
    <>
      <DecoOuterTop>
        <DecoInnerTop>
          <GatsbyImage image={decorCenter} alt="decor" className="center" />
        </DecoInnerTop>
      </DecoOuterTop>
      <AboutSection>
        <Intro>{p.about.intro}</Intro>
        <Decor>
          <GatsbyImage image={decoeSide} alt="decor" className="decImg-1" />
          <GatsbyImage image={image_1} alt="decor" className="decImg-2" />
          <GatsbyImage image={image_2} alt="decor" className="decImg-3" />
          <GatsbyImage image={decoeSide} alt="decor" className="decImg-4" />
        </Decor>
        <AboutBox>
          <GatsbyImage image={avatar} alt="Auddrey" />
          <h2>{p.about.about_box.name}</h2>
          <AboutText>
            <h2>{p.about.about_box.name}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.dataYaml.about_section.about_box.text,
              }}
              className="AboutText"
            />
          </AboutText>
        </AboutBox>
        <DecoOuter>
          <DecoInner>
            <GatsbyImage image={decorCenter} alt="decor" className="center" />
          </DecoInner>
        </DecoOuter>
        <Therapies>
          <TerTitle>{p.about.therapies.title}</TerTitle>
          <GatsbyImage image={decorCenter} alt="decor" className="center" />

          <TerGrid>
            <TerCard>
              <GatsbyImage image={image1} alt="decor" class="decorDog" />
              <TerSub>{p.about.therapies.items[0].title}</TerSub>
            </TerCard>
            <TerCard>
              <GatsbyImage image={image2} alt="decor" className="decorImage" />
              <TerSub>{p.about.therapies.items[1].title}</TerSub>
            </TerCard>
          </TerGrid>

          <Link to={p.about.therapies.cta_link} className="buttonCta">
            {p.about.therapies.cta_label}
          </Link>
        </Therapies>
      </AboutSection>
    </>
  )
}

export default About
