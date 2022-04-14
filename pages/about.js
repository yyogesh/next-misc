import Head from 'next/head'
import React from 'react'
import Footer from '../components/layout/Footer'

const About = () => {
    return (
        <>
            <Head>
                {/* <title>ABout page</title> */}
                <meta name='description' content='Free web development' />
            </Head>
            <div className='content'>About {process.env.DB_USER}</div>
        </>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}