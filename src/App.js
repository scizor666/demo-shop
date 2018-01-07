import React from 'react';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductList from "./components/products/ProductList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./components/login/Login";
import ProductDisplay from "./components/products/ProductDisplay";
import Statistics from "./components/management/Statistics";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import requireLogin from './components/login/RequireLogin';
import Auth from "./utils/Users";
import {AUTH_SUCCESS, SET_ROLE} from "./actions/types";

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
                <Header/>
                <main className="App-main">
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={requireLogin(ProductList)}/>
                    <Route exact path="/products/:id" component={requireLogin(ProductDisplay)}/>
                    <Route exact path="/statistics" component={requireLogin(Statistics)}/>
                </main>
                <Footer/>
            </div>
        </Router>
    </Provider>;

export default App;
