import Auth from '../utils/Auth';
import Categories from "../utils/Categories";
import Products from '../utils/Products';
import _ from 'lodash';
import {
    AUTH_SUCCESS, AUTH_FAILURE, UNAUTH,
    FETCH_PRODUCTS, FETCH_PRODUCT,
    FETCH_CATEGORIES, FETCH_CATEGORY
} from './types';

export const authSuccess = (login) => {
    return {
        type: AUTH_SUCCESS,
        payload: login
    }
};

export const authFailure = () => {
    return {
        type: AUTH_FAILURE,
        payload: 'Wrong login or password'
    }
};

export const login = (credentials) => {
    return dispatch => {
        Auth.authenticate(credentials)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem(Auth.sessionTokenHeader, response.headers.get(Auth.sessionTokenHeader));
                    localStorage.setItem("login", credentials.login);
                    dispatch(authSuccess(credentials.login));
                } else {
                    dispatch(authFailure());
                }
            })
            .catch(() => {
                dispatch(authFailure());
            });
    };
};

export const signout = () => {
    Auth.signout(localStorage.getItem(Auth.sessionTokenHeader), localStorage.getItem('login'));
    localStorage.removeItem(Auth.sessionTokenHeader);
    return {
        type: UNAUTH
    }
};

export const fetchProducts = () => {
    return dispatch => {
        Products.fetchProducts(localStorage.getItem(Auth.sessionTokenHeader))
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(products => dispatch({type: FETCH_PRODUCTS, payload: _.mapKeys(products, 'id')}))
                    // catch @TODO
                } else {
                    //@TODO
                }
            })
        // catch @TODO
    }
};

export const fetchProduct = id => {
    return dispatch => {
        Products.fetchProduct(id, localStorage.getItem(Auth.sessionTokenHeader))
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(product => {
                            dispatch({type: FETCH_PRODUCT, payload: {[product.id]: product}});
                            dispatch(fetchCategory(product.categoryId));
                        })
                    // catch @TODO
                } else {
                    // catch @TODO
                }
            })
        // catch @TODO
    }
};

export const fetchCategories = () => {
    return dispatch => {
        Categories.fetchCategories(localStorage.getItem(Auth.sessionTokenHeader))
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(categories => dispatch({type: FETCH_CATEGORIES, payload: _.mapKeys(categories, 'id')}));
                    // catch @TODO
                } else {
                    // catch @TODO
                }
            })
        // catch @TODO
    }
};

export const fetchCategory = id => {
    return dispatch => {
        Categories.fetchCategory(id, localStorage.getItem(Auth.sessionTokenHeader))
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(category => dispatch({type: FETCH_CATEGORY, payload: {[category.id]: category}}));
                    // catch @TODO
                } else {
                    // catch @TODO
                }
            })
        // catch @TODO
    }
};