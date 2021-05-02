import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"


export const query = graphql`
  query($slug: String) {
    contentfulProjectPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        raw
        }
      }
      contentfulAsset {
        title
        file {
          url
        }
      }
    }
`
const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = props.data.contentfulAsset.title
        const url = props.data.contentfulAsset.file.url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulProjectPost.title}/>
      <h1>{props.data.contentfulProjectPost.title}</h1>
      <p>{props.data.contentfulProjectPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulProjectPost.body.raw), options)}
    </Layout>
  )
}

export default Blog
