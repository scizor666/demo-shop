import React from 'react';
import './App.css';
import SignOut from "./components/login/SignOut";
import ProductList from "./components/products/ProductList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginModal from "./components/login/LoginModal";
import Modal from "./components/shared/Modal";
import ProductDisplay from "./components/products/ProductDisplay";

const App = () =>
    <div className="App">
        <header className="App-header">
            <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"/>
            <SignOut/>
        </header>
        <main className="App-main">
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginModal}/>
                    <Route exact path="/modal" component={Modal}/>
                    <Route exact path="/product" component={ProductDisplay}/>
                    <Route component={ProductList}/>
                </Switch>
            </Router>
        </main>
        <footer className="App-footer">Copyright "Demo Shop", 2017</footer>
    </div>;

export default App;
