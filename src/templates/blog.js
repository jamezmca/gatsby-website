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
        //props.data.contentfulProjectPost.body.references.forEach(e => console.log(e.contentful_id))
        //console.log(node.data.target.sys.id)
        //console.log(node.data.target.sys.id, props.data.contentfulProjectPost.body.references.find(e => e.contentful_id === node.data.target.sys.id).fixed.src)
        return <img src={props.data.contentfulProjectPost.body.references.find(e => e.contentful_id === node.data.target.sys.id).fixed.src} alt="howdy" loading="eager"/>
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
