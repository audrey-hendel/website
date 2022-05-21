import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Tables = () => {
  const data = useStaticQuery(graphql`
    query pricePageQuery {
      markdownRemark {
        html
      }
    }
  `)
  return (<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="price_table" />)
}

export default Tables
