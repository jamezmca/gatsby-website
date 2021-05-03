import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProjectPost (sort: { fields: publishedDate, order: DESC } ){
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <p>"Yesterday is history, tomorrow is a mystery, and today is a gift - that is why they call it the present." - Master Oogway</p>
            <h1>Personal Projects</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulProjectPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BlogPage
