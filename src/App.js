import React from 'react';
import ProductList from "./components/products/ProductList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/login/Login";
import ProductDisplay from "./components/products/ProductDisplay";
import Statistics from "./components/management/Statistics";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import requireLogin from './components/login/RequireLogin';
import withHeaderAndFooter from './components/shared/WithHeaderAndFooter';
import Auth from "./utils/Users";
import {AUTH_SUCCESS, SET_ROLE} from "./actions/types";
import NotFound from "./components/errors/NotFound";
import ServerError from "./components/errors/ServerError";
import Forbidden from "./components/errors/Forbidden";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem(Auth.sessionTokenHeader);
if (token) {
    store.dispatch({type: AUTH_SUCCESS, payload: localStorage.getItem("login")});
    store.dispatch({type: SET_ROLE, payload: localStorage.getItem("role")});
}

const App = () =>
    <Provider store={store}>
        <Router>
            <div className="App">
                <main className="App-main">
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/" component={requireLogin(withHeaderAndFooter(ProductList))}/>
                        <Route exact path="/products/:id(\d+|new)"
                               component={requireLogin(withHeaderAndFooter(ProductDisplay))}/>
                        <Route exact path="/statistics" component={requireLogin(withHeaderAndFooter(Statistics))}/>
                        <Route exact path="/500" component={ServerError}/>
                        <Route exact path="/403" component={Forbidden}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </div>
        </Router>
    </Provider>;

export default App;
