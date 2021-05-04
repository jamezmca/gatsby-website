import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'
import Card from '../components/card'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProjectPost (sort: { fields: publishedDate, order: DESC } ){
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        description
                    }
                }
            }
        }
    `)

    /* <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li> */

    return (
        <div>
            <p>"Yesterday is history, tomorrow is a mystery, and today is a gift - that is why they call it the present." - Master Oogway</p>
            <h1>Personal Projects</h1>
            <div className={blogStyles.posts}>
                {data.allContentfulProjectPost.edges.map((edge) => {
                    return (
                        <Card link={`/blog/${edge.node.slug}`} 
                            title={edge.node.title}
                            date={edge.node.publishedDate}
                            description={edge.node.description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogPage
