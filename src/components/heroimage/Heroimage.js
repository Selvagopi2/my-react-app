import React from 'react'
import "./Heroimage.css"
import Introimg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'

const Heroimage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={Introimg} alt="Introimg" />
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/projects" className='btn'>
                        Projects
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        Contact
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Heroimage