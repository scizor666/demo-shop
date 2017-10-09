import React, {Component} from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";

export default class LoginModal extends Component {
    render() {
        return <Modal title='Login to "Demo Shop"'>
            <LoginForm/>
        </Modal>
    }
}