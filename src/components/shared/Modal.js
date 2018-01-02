import React from "react";
import ReactDOM from 'react-dom';

export default class Modal extends React.PureComponent {

    componentDidMount() {
        this.popup = document.createElement('div');

        if(this.props.id) this.popup.setAttribute('id', this.props.id);
        if(this.props.className) this.popup.setAttribute("class", this.props.className);

        document.body.appendChild(this.popup);
        document.querySelector(".App").className += '  App-blur';
        this._render();
    }

    componentDidUpdate() {
        this._render();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
        document.querySelector(".App").classList.remove('App-blur');
    }

    _render() {
        ReactDOM.render(<div>
            <div className="Modal-back"/>
            <div className="Modal-wrapper">
                <div className="Modal-title">{this.props.title}</div>
                <div className="Modal-content">{this.props.children || this.props.content}</div>
            </div>
        </div>, this.popup);
    }

    render() {
        return null;
    }
};

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

