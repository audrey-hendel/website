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
      access {
        text_1
        text_2
        title
      }
      join_team {
        text_1
        text_2
        title
      }
      support {
        text_1
        text_2
        title
      }
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
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_1 }} className="access_text" />

{/* Zoom button  */}

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.access.text_2 }} className="access_text" />



      <SectionHeader 
        title={pageData.join_team.title} 
        image={pageData.join_team.image}
        />
      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_1 }} className="access_text" />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.join_team.text_2 }} className="access_text" />

      <SectionHeader 
        title={pageData.support.title} 
        image={pageData.support.image}
        />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.support.text_1 }} className="access_text" />

      <div dangerouslySetInnerHTML={{ __html: data.dataYaml.support.text_2 }} className="access_text" />

    </>
  )
}

export default Access