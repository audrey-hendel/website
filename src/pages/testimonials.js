import * as React from "react"
import Title from "~components/title"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import pageData from "~data/testimonials.yml"
import styled from 'styled-components'

const TmGrid = styled.div`
  max-width: 1264px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  gap: 70px;
  margin-top: 100px;
  @media (min-width: 768px){
    overflow: hidden;
  }
  @media (min-width: 1210px){
    overflow: visible;
  }
`
const TmCard = styled.div`
  display: grid;
  gap: 30px;
  position: relative;
  @media (min-width: 768px) {
    &:nth-child(odd) {
    grid-template-columns: 1fr 3fr;
    }
    &:nth-child(even) {
    grid-template-columns: 3fr 1fr;
    .avatarBox {
      order: 2;
   }
  }
}
@media (min-width: 768px) {
  .content {
    width: 110%;
   }
   &:nth-child(odd) .content {
    padding: 65px 60px 65px 200px;
    margin: 0 0 0 -10%;
    @media (min-width: 768px){
        padding: 65px 60px 65px 70px;
      }
      @media (min-width: 1024px){
        padding: 65px 60px 65px 120px;
      }
      @media (min-width: 1440px){
        padding: 65px 60px 65px 200px;
      }
    }
    &:nth-child(even)  .content {
    padding: 65px 200px 65px 60px;
    margin: 0 -10% 0 0;
    @media (min-width: 768px){
        padding: 65px 60px 65px 60px;
      }
      @media (min-width: 1024px){
        padding: 65px 200px 65px 60px;
      }
    }
  }
  
`
const Content = styled.div`
  background: rgba(221, 161, 192, 0.05);
  border: 2px solid rgba(240, 65, 145, 0.1);
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.1);
  border-radius: 30px;
  display: grid;
  padding: 157px 20px 20px;
  margin-top: -125px;
  @media (min-width: 500px){
    margin-top: -100px;
  }
  @media (min-width: 768px){
    padding: 20px;
    margin-top: 0;
  }
  .name{
    font-size: 14px;
    font-family: 'Sitka';
    font-style: normal;
    font-weight: 400;
    color: rgba(196, 196, 196, 1);
    @media (min-width: 768px){
      font-size: 18px;
    }
  }
  .quoTop{
    img{
      width: auto;
      height: auto;
      transform: rotate(180deg);
      padding-top: 20px;
    }
  }
  .quotBottom{
    img{
      width: auto;
      height: auto;
      margin-left: auto;
    }
  }
`
const AvatarBox = styled.div`
position: relative;
display: grid;
justify-items: center;
overflow-x: hidden;
@media (min-width: 768px){
  display: block;
}
.gatsby-image-wrapper {
  position: relative;
  &:nth-child(1){
    justify-self: center;
    z-index: 5;
    background: #fff;
    align-self: center;
    border-radius: 50%;
    border: 3px solid rgba(51, 51, 51, 0.16);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); 
    width: 280px;
    height: 280px;
    padding: 30px;
    position: relative;
    img {
      object-fit: cover;
      opacity: 1;
      height: auto;
      width: auto;
      margin: auto;
      border-radius: 65px;
      @media (min-width: 768px){
        width: 85%;
      }
    }

  }
}
  .avatar{
    position: relative;
  }
  .decor{
    position: absolute;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    margin-top: 100px;
    @media (min-width: 768px){
      width: 155%;
      margin-left: -381px;
      margin-top: 114px;
    }
  }
`
const Stars = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-size: 30px;
  font-family: Times; 
  line-height: 1;
  &::before {
    display: block;
    font-size: 30px;
    color:  #fc0 ;
  }
  &.stars-1::before {
    content: "★";
  }
  &.stars-2::before {
    content: "★★";
  }
  &.stars-3::before {
    content: "★★★";
  }
  &.stars-4::before {
    content: "★★★★";
  }
  &.stars-5::before {
    content: "★★★★★";
  }
`
const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`
const Date = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: 'Damion';
  font-style: italic;
  font-weight: 400;
  color: rgba(196, 196, 196, 1);
  @media (min-width: 500px){
  font-size: 18px;
}

`
const Response = styled.p`
font-family: 'Sitka';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.3;
color: rgba(51, 51, 51, 0.8);
@media (min-width: 500px){
  font-size: 22px;
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
    margin-top: -50px;
    z-index: 2;
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
  @media (min-width: 1024px){
    padding: 60px 0;}
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
  .center {
    margin: 0 auto;
  }
  @media (min-width: 1024px){
    padding: 60px 0;}
`


const SecondPage = () => (
  <Layout path="/testimonials">
    <Seo title="testimonials" />
    <Title text='Testimonials' />
    <DecoOuterTop>
      <DecoInnerTop>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
      </DecoInnerTop>
    </DecoOuterTop>
    <TmGrid>
      {pageData.items.map((ct, i) => {
        return (
          <TmCard>
            <AvatarBox className="avatarBox">
              <GatsbyImage image={GetImageByName(ct.image)} alt="avatar" className="tmAvatar" />
              <GatsbyImage image={GetImageByName('decoration-test.png')} alt='decor' className='decor' />
            </AvatarBox>
            <Content className="content">
            <GatsbyImage image={GetImageByName('quot.png')} alt='decor' className='quoTop' />
              <Response >{ct.response}</Response>
              <GatsbyImage image={GetImageByName('quot.png')} alt='decor' className='quotBottom' />
              <p className="name">{ct.name}</p>
              <Rating>
                <Stars className={'stars-' + ct.stars} />
              </Rating>
              <Date>{ct.date}</Date>
            </Content>
          </TmCard>
        )
      })}
    </TmGrid>
    <DecoOuter>
      <DecoInner>
        <GatsbyImage image={GetImageByName('decoration-4.png')} alt='decor' className='center' />
      </DecoInner>
    </DecoOuter>
  </Layout>
)

export default SecondPage
