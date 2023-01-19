import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.div` 
  position: relative;
  width: 100%;
  padding: 0;
  height: 54vw;
  z-index: -1;
  display: flex;
  justify-content: center;
  video {
    max-width: 100%;
  }
`
const Hero = () => {
  return (
  <HeroSection>
    <video autoPlay muted id="myVideo">
      <source src="/video/happy.mp4" type="video/mp4" />
    </video>
  </HeroSection>
  )
}
export default Hero
