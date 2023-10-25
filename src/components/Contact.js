import React from 'react'
import Navbar from './navbar/Navbar'
import Heroimg2 from './heroimg2/Heroimg2'
import Footer from './body/footer/Footer'
import ContactForm from './contactform/ContactForm'

const Contact = () => {
    return (
        <>
        <Navbar />
        <Heroimg2 heading="CONTACT." text="Let's have a talk."/>
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact