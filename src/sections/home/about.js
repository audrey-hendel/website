import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from "~components/getImageByName"
import { useStaticQuery, graphql } from "gatsby"

const AboutSection = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px;
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

`
const Intro = styled.p`
  max-width: 80%;
  margin: 0 auto;
  font-family: "Sitka";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: #333333;
  @media (min-width: 500px){
    padding: 20px;
    font-size: 20px;
  }
  @media (min-width: 1024px){
    font-size: 25px;
    max-width: 920px;
  }
`
const Decor = styled.div`
  display: grid;
  padding: 20px;
  row-gap: 0;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: -64px;
  margin-top: -60px;
  
  .decImg-1 {
    grid-column: 1/2;
    transform: rotate(190deg);
    margin-left: -20px;
    z-index: -2;
    margin-bottom: -34px;
  }
  .decImg-2 {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .decImg-3 {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  .decImg-2, .decImg-3{
    border-radius: 16px;
  }
  .decImg-4{
    grid-row: 3/4;
    grid-column: 2/3;
    margin-top: -34px;
    z-index: -2;
    @media (min-width: 1024px){
      grid-column: 4/4;
    }
  }
  @media (min-width: 1024px) {
    gap: 26px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 0;
    .decImg-2 {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    .decImg-3 {
      grid-row: 1/2;
      grid-column: 3/4;
    }
    .decImg-4 {
      grid-row: 1/2;
      grid-column: 4/5;
    }
  }
`
const AboutBox = styled.div`
  padding: 10px;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  @media (min-width: 1024px) {
    margin: 70px auto 0;
    grid-template-columns: 5fr 7fr;
    gap: 0;
    padding: 56px;
  }
  .gatsby-image-wrapper {
    border-radius: 24px;
    width: 70%;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 100%;
      grid-row: 1/3;
    }
    &.avatarAudrey{
      align-self: center;
      img {
        height: auto;
      }
    }
  }
  h2 {
    font-size: 30px;
    font-family: "Damion", cursive;
    color: #f04191;
    font-weight: 400;
    grid-row: 1/2;
    text-align: center;
    margin: 0;
    @media (min-width: 500px) {
      font-size: 50px;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
`
const AboutText = styled.div`
  position: relative;
  border-radius: 30px;
  padding: 0 10px;
  @media (min-width: 500px){
    padding: 0 60px;
  }
  @media (min-width: 1024px) {
    padding: 10px;
  }
  h2 {
    font-size: 50px;
    font-family: "Damion", cursive;
    color: #f04191;
    font-weight: 400;
    display: none;
    margin: 0;
    text-align: left;
  }
  h3 {
    color: rgba(51, 51, 51, 0.5);
    margin: 15px 0;
    font-size: 18px;
    font-family: "Sitka";
    text-align: center;
    @media (min-width: 500px) {
      margin: 22px 0;
      text-align: left;
      font-size: 25px;
    }
  }
  p{
    font-size: 14px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 24px;
      
    }
    @media (min-width: 1024px) {
      font-size: 22px;
      line-height: 1.2;
    }

  }
  @media (min-width: 1024px) {
    h2 {
      display: block;
    }
    padding: 56pX;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -56px;
      right: 0;
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
  border-radius: 30px 30px 0 0;
  padding: 2px;
  background: linear-gradient(pink, transparent);
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    margin-top: -20px;
    z-index: 2;
  }
`
const DecoInnerTop = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 30px 30px 0 0;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;

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
  @media (min-width: 1024px) {
    border-radius: 50px 50px 0 0;
    padding: 60px 0;
  }
`
const DecoOuter = styled.div`
  position: relative;
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  border-radius: 0 0 30px 30px;
  padding: 2px;
  background: linear-gradient(transparent, pink);

  @media (min-width: 1024px) {
    border-radius: 0 0 50px 50px;
    margin-bottom: -75px;
    z-index: 2;
  }
`
const DecoInner = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 0 0 30px 30px;
  border: 1px transparent;
  width: 100%;
  height: 100%;
  background: #fff;
  @media (min-width: 1024px) {
    padding: 0 0 60px; 
    border-radius: 0 0 50px 50px;
  }
`


const Therapies = styled.div`
  display: grid;
  background: rgba(240, 128, 179, 0.07);
  padding: 20px;
  padding: 100px 20px 60px;
  margin-top: -70px;
  z-index: ;
  @media (min-width: 768px) {
    margin-top: -70px;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
    padding: 142px 20px 60px;
  }
`
const TerTitle = styled.h2`
  margin: 0 auto;
  font-family: "Damion", cursive;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.5);
  letter-spacing: 0.08em;
  @media (min-width: 500px) {
    font-size: 60px;
  }
`
const TerSub = styled.div`
  margin: 0 auto;
  font-family: "Damion", cursive;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;
  color: rgba(51, 51, 51, 0.5);
  letter-spacing: 0.08em;
  white-space: pre-wrap;
  @media (min-width: 500px){
    font-size: 30px;
  }
  @media (min-width: 1024px){
    font-size: 40px;
  }
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
  margin-top: 60px;
  justify-content: center;
  gap: 60px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;

  }
`
const TerCard = styled.div`
  display: grid;
  justify-content: center;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 39px;
  }

  img {
    width: 140px;
    margin: 0 auto;
    @media (min-width: 500px){
      display: block;
      width: auto;
      height: auto;
      margin: auto;
    }
  }
  &:nth-child(1) {
    &::before {
        content: "";
        background: url(/images/decor-dog.png);
        position: absolute;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 140px;
        height: 150px;
        margin-top: -55px;
        @media( min-width: 500px){
          width: 180px;
          height: 190px;
          margin-left: -25px;
          margin-top: -71px;
        }
        @media (min-width: 1024px) {
          margin-left: 20px;
        }
        @media (min-width: 1210px) {
          width: 240px;
          height: 250px;
          margin-top: -90px;
          margin-left: -30px;
        }
      }
      @media (min-width: 768px){
        &::after {
          content: "";
          border: 3px solid rgba(240, 65, 145, 0.35);
          border-radius: 50px;
          position: absolute;
          height: 300px;
          left: 50%;
          transform: translateX (-50%);
          @media (min-width: 1024px){
            height: 343px;
          }
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
    position: relative;
    &::after{
    content: "";
    position: absolute;
    width: 151px;
    height: 0px;
    border: 2px solid rgba(240, 65, 145, 0.35);
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    top: -15%;
    @media(min-width: 500px){
      width: 240px;
      top: -10%;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
    &::before {
        content: "";
        background: url(/images/decor-horse.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100%;
        width: 238px;
        height: 145px;
        margin-top: 55px;
        margin-left: 30px;
        @media (min-width: 500px){
          margin-left: 126px;
          margin-top: 135px;
        }
        @media (min-width: 815px){
          margin-left: 170px;
        }
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
          <GatsbyImage image={avatar} alt="Auddrey" class="avatarAudrey" />
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
