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
                        titleImage {
                            gatsbyImageData(
                                placeholder: BLURRED,
                                cropFocus: CENTER,
                                resizingBehavior: FILL
                            )
                        }
                    }
                }
            }
        }
    `)

    const skills = ['JavaScript', 'Algorithms', 'Data Structures', 'HTML', 'CSS', 'React', 'React Native', 'Express', 'NoSQL', 'SQL', 'Material UI', 'REST APIs', 'GraphQL', 'MongoDB', 'Redux', 'SASS', 'React-Router', 'Heroku', 'E-commerce']

    return (
        <div className={blogStyles.blogContainer}>
            <p><strong>I am a Vancouver based web designer and engineer focused on creating clean & user-friendly experiences.</strong></p>
            <p>"Yesterday is history, tomorrow is a mystery, and today is a gift - that is why they call it the present." - Master Oogway</p>
            <div className={blogStyles.skillsContainer}>
                {skills.map(skill => (
                    <div key={skill} className={blogStyles.skillBox}><p>{skill}</p></div>
                ))}
            </div>
            <h1>Project Gallery</h1>
            <div className={blogStyles.posts}>
                {data.allContentfulProjectPost.edges.map((edge) => {
                    return (
                        <Card link={`/blog/${edge.node.slug}`}
                            title={edge.node.title}
                            date={edge.node.publishedDate}
                            description={edge.node.description}
                            key={edge.node.title}
                            url={edge.node.titleImage?.gatsbyImageData}
                            fileName={edge.node.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogPage
