import React from 'react';
import './style.css'; 

const LoginPortal = () => {
  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="container">
          <div className="form">
            <h2>Login</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="Username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" />
              </div>
              <div className="inputBox">
                <input type="submit" value="login" />
              </div>
              <p className="forget">
                Forgot Password ? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account ? <a href="#">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPortal;
