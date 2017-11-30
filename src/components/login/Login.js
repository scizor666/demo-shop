import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";
import './Login.css';

const Login = () =>
    <Modal className="Login-wrapper" title='Login to "Demo Shop"'>
        <LoginForm/>
    </Modal>;

export default Login;