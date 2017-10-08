import React, {Component} from "react";
import './Modal.css';

export default class Modal extends Component {

    static defaultProps = {
        title: 'Some really long Modal default title here to show how it truncated',
        content: (() => {
            let res  = "";
            for(let i = 0; i < 50; i++) {
                res = res + "Hello from modal "
            }
            return res; })()
    };

    render() {
        return <div className="Modal-wrapper">
            <div className="Modal-title">{this.props.title}</div>
            <div className="Modal-content">{this.props.content}</div>
        </div>
    };
}

