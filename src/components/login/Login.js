import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";
import './Login.css';

const Login = () =>
    <div className="Login-wrapper">
        <Modal title='Login to "Demo Shop"' show={true}>
            <LoginForm/>
        </Modal>
    </div>;

export default Login;