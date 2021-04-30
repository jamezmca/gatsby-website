import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I am swagman</h2>
      <p> Diggity      <Link to="/contact">sup dawg</Link></p>
    </Layout>
  )

}


export default IndexPage