
import React, { useState } from "react";
import './Login.css'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import Footer from "./Footer";

const Signup = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully:', email);
      setError(null);

      history.push('/login');
    } catch (error) {
      console.log('Server error', error);
      setError(error.message);
    }
  };

  return (
   <div className="signup-page">    
     <div className="signup-container" >
       <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" className="logo" />
       <h2 className="sign-in-text">Sign Up</h2>
       <form onSubmit={handleSubmit}>
         <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
         <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
         <button type="submit">Sign Up</button> <br />
       </form>
       <div className="signup-link">
         Already have an account? <a href="/login" style={{ color: 'white' }}>Log in now.</a>
       </div>
       {error && <p className="error-message">{error}</p>}
       <Footer page="signup"/>
     </div>
    </div>

  );
};

export default Signup;
