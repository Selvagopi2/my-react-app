import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedupIn, setSignedupIn] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        if (fullName && email && password) {

            console.log('Signing up with Full Name:', fullName, 'Email:', email, 'and Password:', password);
            setSignedupIn(true);
        } else {
            alert('Please fill in all the required fields.');
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
            <div className="form-group">
                <label htmlFor='fullName'>Full Name:</label>
                <input 
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                placeholder='fullName'
                onChange={(e) => setFullName(e.target.value)}
                required

                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input 
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <button type="submit">Sign up</button>
            
            </form>
            {signedupIn && <p>Signedup in Successfully</p>}
        </div>
    );

};

export default SignupForm