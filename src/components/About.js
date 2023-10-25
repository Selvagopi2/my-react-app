import React from 'react'
import Navbar from './navbar/Navbar'
import Heroimg2 from './heroimg2/Heroimg2'
import Footer from './body/footer/Footer'
import AboutContent from './aboutcontent/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="ABOUT." text="I'm a friendly Front-End developer."/>
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About