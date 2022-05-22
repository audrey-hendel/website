import React from 'react'
import styled from 'styled-components'
import SectionHeader from "~sections/distance/section-header"
import pageData from "~data/distance-healing.yml"
import { useStaticQuery, graphql } from "gatsby"


const Table = styled.div`
  display: grid;
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`
const Access = () => {
  const data = useStaticQuery(graphql`
  query distData {
    dataYaml(page: {eq: "distance-healing"}) {
      text_1
      text_2
    }
  }
`)
  return (
    <>
      <SectionHeader 
        title={pageData.access.title} 
        image={pageData.access.image}
        />
      <h3>{pageData.access.subtitle}</h3>

      {pageData.access.team.map((m,i) => {
        return (
          <Table>
            <p>{m.name}</p>
            <p>{m.bio}</p>
          </Table>
        )
      })}
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.text_1 }} className="access_text" />

{/* Zoom button  */}

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.text_2 }} className="access_text" />

    </>
  )
}

export default Access