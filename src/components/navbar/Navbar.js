import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className="page-container">
        <nav className={color ? "navbar navbar-bg" : "navbar"}>
            <h3 className='logo'>Logo</h3>
            <ul className='nav-links'>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
                <Link to="/projects" className='projects'>
                    <li>Projects</li>
                </Link>
                <Link to="/contact" className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to="/login" className="login">
                    <li>Login</li>
                </Link>
                <Link to="/signup" className='signup'>
                    <li>Signup</li>
                </Link>
                </ul>
        </nav>
        </div>
        
    );
};

export default Navbar