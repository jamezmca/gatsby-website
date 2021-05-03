import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import BlogPage from "./blog"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <BlogPage/>
      <Card/>
    </Layout>
  )

}


export default IndexPage