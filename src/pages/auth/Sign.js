import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './sign.css';

const Sign = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`containersign ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? (
            <SignUpForm
              showPassword={showPassword}
              handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            />
          ) : (
            <SignInForm
              showPassword={showPassword}
              handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            />
          )}
            
        </div>
      </div>

      <div className="panels-container">
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Welcome, we are glad you visited our website
            </p>
            <button className="signbtn transparent" id="sign-up-btn" onClick={toggleMode}>
              Sign up
            </button>
          </div>
         
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
            Welcome, we are glad you visited our website
            </p>
            <button className="signbtn transparent" id="sign-in-btn" onClick={toggleMode}>
              Sign in
            </button>
          </div>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sign;

