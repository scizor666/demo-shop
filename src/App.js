import React from 'react';
import SignOutContainer from "./components/login/SignOutContainer";
import ProductList from "./components/products/ProductList";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from "./components/login/Login";
import ProductDisplay from "./components/products/ProductDisplay";
import Statistics from "./components/management/Statistics";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import requireLogin from './components/login/RequireLogin';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const App = () =>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
            <header className="App-header">
                <img id="App-logo" src="/images/logo.svg"/>
                <SignOutContainer/>
            </header>
            <main className="App-main">
                <Router>
                    <Switch>
                        <Redirect exact path="/" to="/login"/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/statistics" component={Statistics}/>
                        <Route exact path="/products/:id" component={ProductDisplay}/>
                        <Route exact path="/products/:id/edit" render={() => <ProductDisplay editMode={true}/>}/>
                        <Route exact path="/main" component={requireLogin(ProductList)}/>
                    </Switch>
                </Router>
            </main>
            <footer className="App-footer">Copyright "<u>Demo Shop</u>", 2017</footer>
        </div>
    </Provider>;

export default App;
