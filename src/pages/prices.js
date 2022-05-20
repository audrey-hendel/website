import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="prices" />
    <h1>Coming soon...</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
