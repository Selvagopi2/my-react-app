import React, { useState } from "react"
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            console.log('Logging in with email:', email, 'and password:', password);
            setLoggedIn(true);
        } else {
            alert('Please fill in both email and password fields.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
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
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                </div>

                <button type="submit">Login</button>
            </form>
            {loggedIn && <p>Logged in Successfully!</p>}
        </div>
    );
};

export default LoginForm

    