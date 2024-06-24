import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './Register.css';
import toast from 'react-hot-toast';
import { auth, db } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !retypePassword) {
      setError('All fields are required');
      return false;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    if (password !== retypePassword) {
      setError('Passwords do not match');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          password:password,
        });

        toast.success("User Registered Successfully");
        
        setTimeout(() => {
            navigate('/login');
          }, 2000); 
          
      } catch (error) {
        toast.error("Error Submitting Form!");
        console.log(error.message);
      }
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordMessage(`Password must be at least 8 characters. Currently ${newPassword.length}`);
    } else {
      setPasswordMessage('');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordMessage && <p className="password-message">{passwordMessage}</p>}
          <input
            type="password"
            placeholder="Retype Password"
            className="register-input"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <button type="submit" className="register-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
