import React from 'react';
import './LoginForm.css'

const LoginForm = () =>
    <div className="LoginForm-wrapper">
        Your login:
        <input className="LoginForm-loginField" pattern="[A-Za-z]{6,15}" minLength="6"/>
        Your password:
        <input className="LoginForm-passwordField" type="password" minLength="6"/>
        <button className="LoginForm-submit" type="submit">Submit</button>
    </div>;

export default LoginForm;