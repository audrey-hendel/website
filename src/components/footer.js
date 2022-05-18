import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from './getImageByName'
import dataHome from '../data/home.yml'
import dataNav from '../data/navigation.yml'

const Footer = () => {
  return (
    <footer>
    <div>
      <div>
        <Link to="/">
        <GatsbyImage image={GetImageByName("om-rose-.png")} alt="gallery image" />
        </Link>
      </div>
      <div>
        <h2>Navigation Menu</h2>
        {dataNav.map((item,i) => {
        return (
          <p>
        <Link to={item.link}>
          {item.label}
        </Link>
        </p>
        )
        })}
      </div>
      <div>
        <h2>Contact Details</h2>
        {dataHome.contact.text.map((t,i) => {
          return (
            <p>{t}</p>
          )
        })}
      </div>
      </div>
    </footer>
  )
}
export default Footer