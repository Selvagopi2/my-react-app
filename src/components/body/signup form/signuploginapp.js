import React from "react";
import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/body/footer/Footer'
import LoginForm from "./components/body/login form/LoginForm";
import SignupForm from "./components/body/signup form/SignupForm";

function App() {
  return (
    <Router>
      <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/signup" element={<SignupForm />}/>
      </Routes>
      <Footer />
      </div>
    </Router>

  );
}

export default App