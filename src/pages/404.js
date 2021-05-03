import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import Card from '../components/card'


const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <Card/>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound
