import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './body/footer/Footer';
import Heroimg2 from './heroimg2/Heroimg2';
import Pricing from './pricing/Pricing';
import Work from './workcard/Work'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="PROJECTS." text="Some of my recent works." />
            <Work />
            <Pricing />
            <Footer />
        </div>
    
    );
}

export default Projects