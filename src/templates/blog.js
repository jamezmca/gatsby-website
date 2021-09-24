import React from 'react'
import Layout from '../components/layout'
import Head from "../components/head"
import { BLOCKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as blogStyles from './blog.module.scss'

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
            gatsbyImageData
            fixed(width: 400) {
              src
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
        let imgData = props.data.contentfulProjectPost.body.references.find(e => e.contentful_id === node.data.target.sys.id)?.fixed.src
        // console.log(imgData)
        if (imgData.search(".gif") !== -1) return <img src={imgData} alt="gif"/>
        const img = getImage(props.data.contentfulProjectPost.body.references.find(e => e.contentful_id === node.data.target.sys.id))
        // console.log(img)
        //props.data.contentfulProjectPost.body.references.forEach(e => console.log(e.contentful_id))
        //console.log(node.data.target.sys.id)
        //console.log(node.data.target.sys.id, props.data.contentfulProjectPost.body.references.find(e => e.contentful_id === node.data.target.sys.id).fixed.src)
        return <GatsbyImage image={img} alt="howdy" className={blogStyles.blogImages}/>
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
