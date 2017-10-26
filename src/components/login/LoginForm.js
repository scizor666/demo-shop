import React from 'react';
import './LoginForm.css'

const LoginForm = () =>
    <div className="LoginForm-wrapper">
        Your login:
        <div className="LoginForm-fieldGroup">
            <input className="LoginForm-field" pattern="[A-Za-z]{6,15}" minLength="6"/>
            <span className="LoginForm-fieldIcon fa fa-user"/>
        </div>
        Your password:
        <div className="LoginForm-fieldGroup">
            <input type="password" minLength="6" className="LoginForm-field"/>
            <span className="LoginForm-fieldIcon fa fa-lock"/>
        </div>
        <button className="LoginForm-submit" type="submit">Submit</button>
    </div>;

export default LoginForm;