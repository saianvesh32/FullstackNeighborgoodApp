import React from 'react';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postcardImage from "../assets/postcards1.png";
import logimg from "../assets/logimg.jpeg"
const Login = ({ isSignInPage = true }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: ''
    }),
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    console.log("hello");
    console.log('data :>> ', data);
    e.preventDefault();
    const res = await fetch(`http://localhost:6005/api/${isSignInPage ? 'login' : 'register'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(res.status);

    if (res.status === 400) {
      alert('Invalid credentials');
    } else {
      const resData = await res.json();
      console.log(resData);
      if (resData.token) {
        localStorage.setItem('user:token', resData.token);
        localStorage.setItem('user:detail', JSON.stringify(resData.user));
        console.log("hii iam login succeffully with credentials");
        navigate('/dashboard');
      }
    }
  };

  const loginWithGoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };

  return (
    <div className="login-page">
      <div className="image-section">
      <h1 className="welcome-text">Welcome to Neigborgood</h1>
        <img src={logimg} alt="Postcard" className="postcard-image" />
      </div>
      <div className="form-section">
        <h1 style={{ textAlign: "center" }}>{isSignInPage ? 'Login' : 'Sign Up'}</h1>
        <div className="form">
          <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
            {
              !isSignInPage && <input type="text" name="fullName" placeholder='Username' value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />
            }
            <input type="email" name="email" placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <input type="password" name="password" placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <button type="submit">{isSignInPage ? 'Sign in' : 'Sign up'}</button>
            <div>
              {isSignInPage ? "Didn't have an account?" : "Already have an account?"}
              <span className="text-primary" onClick={() => navigate(`/users/${isSignInPage ? 'signup' : 'login'}`)}>{isSignInPage ? 'Sign up' : 'Sign in'}</span>
            </div>
          </form>
          <button className='login-with-google-btn' onClick={loginWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
