import React, { useState, useContext } from 'react';
//import { GoogleLogin } from 'react-google-login';
import './LogInPg.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import toast from 'react-hot-toast';
import { UserContext } from '../../context/UserContext';

const LogInPg = () => {
//   const handleLoginSuccess = (response) => {
//     console.log('Login Success:', response.profileObj);
//   };

//   const handleLoginFailure = (response) => {
//     console.log('Login Failed:', response);
//   };

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();
const { setUser } = useContext(UserContext);


const handleLogin = async (e) => {
    e.preventDefault();

    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        const displayName = user.displayName || 'User';
        setUser({ email: user.email, displayName });
        console.log("Login Success!!", user);
        toast.success(`Login Success ${displayName}`);
        navigate('/home');

    }catch(error){
        setError("Failed to LogIn. Please check your Username and Password");
        toast.error("Failed to LogIn. Please check your Username and Password");
        console.log(error.message);
    }
}

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className='error-message'>{error}</p>}
        <form onSubmit={handleLogin}>
        <input 
            type="email" 
            placeholder="Email" 
            className="login-input"
            value={email}
            onChange={(e)=> setEmail(e.target.value)} 
        />

        <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />
        <button className="login-button">Log In</button>
        {/* <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          className="google-login-button"
        /> */}
        <button className="signup-button" onClick={()=>navigate('/register')}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LogInPg;
