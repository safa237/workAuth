import React, { useState } from 'react';
import './reset.css';

function Reset  ()  {
    return (
        <div className="reset-password">
            <p>Enter your email address to reset your password.</p>
            <form >
                <div className="form-group">
                    <input  type="email" className="f" placeholder='Email' />
                </div>
                <button style={{backgroundcolor: "#5AC3B0"}} type="submit" className="resetbtn ">Reset Password</button>
            </form>
        </div>
    );
};

export default Reset;