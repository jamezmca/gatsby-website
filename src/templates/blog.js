import React from 'react'
import Layout from '../components/layout'
import Head from "../components/head"
import { BLOCKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String!) {
    contentfulProjectPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed(width: 1000) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
const Blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node)
        
        return //<img src={node.data.target.fixed?.src} alt="hello" />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulProjectPost.title} />
      <h1>{props.data.contentfulProjectPost.title}</h1>
      <p>{props.data.contentfulProjectPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulProjectPost.body.raw), options)}
    </Layout>
  )
}

export default Blog
