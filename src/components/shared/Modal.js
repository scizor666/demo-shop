import React from "react";
import './Modal.css';

const Modal = props =>
    <div className="Modal-wrapper">
        <div className="Modal-title">{props.title}</div>
        <div className="Modal-content">{props.children || props.content}</div>
    </div>;

Modal.defaultProps = {
    title: 'Some really long Modal default title here to show how it truncated',
    content: (() => {
        let res = "";
        for (let i = 0; i < 50; i++) {
            res = res + "Hello from modal "
        }
        return res;
    })()
};

export default Modal;

