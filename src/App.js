import React, {Component} from 'react';
import './App.css';
import SignOut from "./components/login/SignOut";
import Modal from "./components/shared/Modal";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"/>
                    <SignOut/>
                </header>
                <main className="App-main">
                    <Modal/>
                </main>
                <footer className="App-footer">Copyright "Demo Shop", 2017</footer>
            </div>
        );
    }
}

export default App;
