import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as headerStyles from './header.module.scss'
import Modal from './modal'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <button onClick={() => setIsOpen(true)}>Contact me</button>
        </header>
    )
}

export default Header
