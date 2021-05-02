import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    head
                }
            }
        }
    `)
    //change favicon.io to change icon
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.head}`}/>
    )
}

export default Head
