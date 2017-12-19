import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";

const Login = () =>
    <Modal className="Login-wrapper" title='Login to "Demo Shop"'>
        <LoginForm/>
    </Modal>;

export default Login;