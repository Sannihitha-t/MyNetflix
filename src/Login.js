import React,{useState} from "react";
import './Login.css';
import{ Link, Navigate } from "react-router-dom";
import {auth} from './firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Footer from "./Footer";


const Login = ({isAuthenticated, setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  

  const handleUsernameChange = (e) => {
      setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };
  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log('Email:',email);
      console.log("Password:",password);
      if (!email || !password) {
      console.error('Username and password are required.');
      return;
  }
     try{
      await signInWithEmailAndPassword(auth, email,password)
      console.log('User signed in sucessfully:',email);
      setEmail('');
      setPassword('');
      setError(null);
      setIsAuthenticated(true);

     } catch(error){
      console.log("server error",error);
      setError(error.message);
     }
  };

  const handleRememberMeChange = () =>{
      setRememberMe(!rememberMe);
  };
 

  if(isAuthenticated){
   return <Navigate to ="/home"/>;
  }

  return(
    <div className="login-page">
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" className="logo" />
     <div className="login">
      <div className="login-container">
        {/*  <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" className="logo" />*/}
          <h2 className="sign-in-text ">Sign In</h2>
          <form onSubmit={handleSubmit}>
              <input type="email" id="email" placeholder="Email" value={email} onChange={handleUsernameChange} required/>
              <input type="password" id="Password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
              <button type="submit"> Sign In </button> <br/>
              <div className="additional-options">
              <label>
              <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
                  Remember me
              </label>
              <span className="need-help-link">Need help?</span>
              </div>
          </form>
          <br/><br/><br/><br/>
          <div className="sinup-link" style={{color:'grey'}}>
              New to Netflix? <Link to = "/signup" style={{color: 'white'}}> Sign up now.</Link>
          </div>
             <h5 style={{color:'grey'}}> This page is protected by Google reCAPTCHA to
              ensure you're not a bot.Learn more.</h5>
              {error && <p classname="error-message">{error}</p>}
               <Footer page="login"/>
        </div>
        </div>
    </div>
  );
};
export default Login;