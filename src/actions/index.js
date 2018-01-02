import Auth from '../utils/Auth';
import Categories from "../utils/Categories";
import Products from '../utils/Products';
import _ from 'lodash';
import {
    AUTH_SUCCESS, AUTH_FAILURE, UNAUTH,
    FETCH_PRODUCTS, FETCH_PRODUCT,
    FETCH_CATEGORIES, FETCH_CATEGORY,
    CHANGE_FILTER, RESET_FILTER
} from './types';

export const authSuccess = login => {
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

export const login = credentials => {
    return async dispatch => {
        const response = await Auth.authenticate(credentials);
        if (response.status === 200) {
            localStorage.setItem(Auth.sessionTokenHeader, response.headers.get(Auth.sessionTokenHeader));
            localStorage.setItem("login", credentials.login);
            dispatch(authSuccess(credentials.login));
        } else {
            dispatch(authFailure());
        }
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
    return async dispatch => {
        const response = await Products.fetchProducts(localStorage.getItem(Auth.sessionTokenHeader));
        if (response.status === 200) {
            const products = await response.json();
            dispatch({type: FETCH_PRODUCTS, payload: _.mapKeys(products, 'id')});
            // catch @TODO
        } else {
            //@TODO
        }
    }
};

export const fetchProduct = id => {
    return async dispatch => {
        const response = await Products.fetchProduct(id, localStorage.getItem(Auth.sessionTokenHeader));

        if (response.status === 200) {
            const product = await response.json();
            dispatch({type: FETCH_PRODUCT, payload: {[product.id]: product}});
            dispatch(fetchCategory(product.categoryId));
            // catch @TODO
        } else {
            // catch @TODO
        }
    }
};

export const fetchCategories = () => {
    return async dispatch => {
        const response = await Categories.fetchCategories(localStorage.getItem(Auth.sessionTokenHeader));
        if (response.status === 200) {
            const categories = await response.json();
            dispatch({type: FETCH_CATEGORIES, payload: _.mapKeys(categories, 'id')});
            // catch @TODO
        } else {
            // catch @TODO
        }
    }
};

export const fetchCategory = id => {
    return async dispatch => {
        const response = await Categories.fetchCategory(id, localStorage.getItem(Auth.sessionTokenHeader));
        if (response.status === 200) {
            const category = await response.json();
            dispatch({type: FETCH_CATEGORY, payload: {[category.id]: category}});
            // catch @TODO
        } else {
            // catch @TODO
        }
    }
};

export const changeFilter = (name, value) => ({type: CHANGE_FILTER, payload: {[name]: value}});

export const resetFilter = () => ({type: RESET_FILTER});
