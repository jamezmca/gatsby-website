import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    //© 2021

    return (
        <footer className={footerStyles.footer}>
            <a href="https://github.com/jamezmca" target="_blank">
                <span>
                    <FontAwesomeIcon icon={faGithub} className={footerStyles.icons}/>
                </span>
            </a>
        </footer>
    )
}

export default Footer
