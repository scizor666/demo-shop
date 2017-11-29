import React from 'react';
import './App.css';
import SignOut from "./components/login/SignOut";
import ProductList from "./components/products/ProductList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/login/Login";
import Modal from "./components/shared/Modal";
import ProductDisplay from "./components/products/ProductDisplay";
import Statistics from "./components/management/Statistics";

const App = () =>
    <div className="App">
        <header className="App-header">
            <img id="App-logo" src="/images/logo.svg"/>
            <SignOut/>
        </header>
        <main className="App-main">
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/modal" component={Modal}/>
                    <Route exact path="/statistics" component={Statistics}/>
                    <Route exact path="/product" component={ProductDisplay}/>
                    <Route exact path="/product/edit" render={() => <ProductDisplay editMode={true}/>}/>
                    <Route component={ProductList}/>
                </Switch>
            </Router>
        </main>
        <footer className="App-footer">Copyright "<u>Demo Shop</u>", 2017</footer>
    </div>;

export default App;
