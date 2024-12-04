import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Fbase';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import "./SignIn.css";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";

const SignIn = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAuthentication = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            if (action === "Sign Up") {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    formData.email,
                    formData.password
                );

                // Update user profile with name
                await updateProfile(userCredential.user, {
                    displayName: formData.name
                });

                setSuccess('Account created successfully!');
                // Navigate to dashboard after successful signup
                navigate('/Dashboard');
            } else {
                // Sign in existing user
                await signInWithEmailAndPassword(
                    auth,
                    formData.email,
                    formData.password
                );
                
                setSuccess('Logged in successfully!');
                // Navigate to dashboard after successful login
                navigate('/Dashboard');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <form onSubmit={handleAuthentication} className="inputs">
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input 
                                type="text" 
                                placeholder='Name' 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input 
                            type="email" 
                            placeholder='Email'
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input 
                            type="password" 
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                
                    {action === "Login" && (
                        <div className="forgot-password">
                            Forgot Password?<span> Click Here!</span>
                        </div>
                    )}
                    
                    <div className="submit-container">
                        <div 
                            className={action === "Login" ? "submit gray" : "submit"}
                            onClick={() => setAction("Sign Up")}
                        >
                            Sign Up
                        </div>
                        <div 
                            className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignIn;