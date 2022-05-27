import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./tables.css"

const Tables = () => {
  const data = useStaticQuery(graphql`
    query pricePageQuery {
      markdownRemark(frontmatter: {page: {eq: "prices"}}) {
        html
      }
    }
  `)
  return (<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="price_table" />)
}

export default Tables
