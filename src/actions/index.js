import Users from '../utils/Users';
import Categories from "../utils/Categories";
import Products from '../utils/Products';
import _ from 'lodash';
import {
    AUTH_SUCCESS, AUTH_FAILURE, UNAUTH, SET_ROLE,
    FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PRODUCTS_WITH_REPLACEMENT,
    FETCH_CATEGORIES, FETCH_CATEGORY,
    CHANGE_FILTER, RESET_FILTER, CHANGE_SEARCH_TEXT, UPDATE_PRODUCT, DELETE_PRODUCT
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
        try {
            const response = await Users.authenticate(credentials);
            if (response.status === 200) {
                localStorage.setItem(Users.sessionTokenHeader, response.headers.get(Users.sessionTokenHeader));
                localStorage.setItem("login", credentials.login);
                dispatch(authSuccess(credentials.login));
                dispatch(fetchRole(credentials.login))
            } else {
                dispatch(authFailure());
            }
        } catch (error) {
            dispatch(authFailure())
        }

    };
};

export const fetchRole = login => {
    return async dispatch => {
        const response = await Users.userInfo(localStorage.getItem(Users.sessionTokenHeader), login);
        if (response.status === 200) {
            const users = await response.json();
            dispatch(async dispatch => {
                const response = await Users.role(localStorage.getItem(Users.sessionTokenHeader), users[0].roleId);
                if (response.status === 200) {
                    const roles = await response.json();
                    dispatch({type: SET_ROLE, payload: roles[0].name});
                    localStorage.setItem("role", roles[0].name);
                } else {
                    console.log(response);
                }
            });
        } else {
            console.log(response);
        }
    };
};

export const signout = () => {
    Users.signout(localStorage.getItem(Users.sessionTokenHeader), localStorage.getItem('login'));
    localStorage.removeItem(Users.sessionTokenHeader);
    return {
        type: UNAUTH
    }
};

export const fetchProducts = (props = {replace: false}) => {
    return async dispatch => {
        const response = await Products.fetchProducts(localStorage.getItem(Users.sessionTokenHeader), props);
        if (response.status === 200) {
            const products = await response.json();
            const type = props.replace ? FETCH_PRODUCTS_WITH_REPLACEMENT : FETCH_PRODUCTS;
            dispatch({type, payload: _.mapKeys(products, 'id')});
        } else {
            console.log(response);
        }
    }
};

export const fetchProduct = id => {
    return async dispatch => {
        const response = await Products.fetchProduct(id, localStorage.getItem(Users.sessionTokenHeader));

        if (response.status === 200) {
            const product = await response.json();
            dispatch({type: FETCH_PRODUCT, payload: {[product.id]: product}});
            dispatch(fetchCategory(product.categoryId));
        } else {
            console.log(response);
        }
    }
};

export const deleteProduct = (id, successCallback, errorCallback) => {
    return async dispatch => {
        try {
            const response = await Products.deleteProduct(id, localStorage.getItem(Users.sessionTokenHeader));

            if (response.status === 200) {
                successCallback();
                dispatch({type: DELETE_PRODUCT, payload: id});
            } else {
                errorCallback(response)
            }
        } catch (error) {
            errorCallback(error)
        }
    }
};

export const updateProduct = (id, productData, successCallback, errorCallback) => {
    return async dispatch => {
        try {
            const response = await Products.updateProduct(id, localStorage.getItem(Users.sessionTokenHeader), productData);

            if (response.status === 200) {
                if (successCallback) successCallback();
                const product = await response.json();
                dispatch({type: UPDATE_PRODUCT, payload: {[product.id]: product}})
            } else {
                errorCallback(response);
            }
        } catch (error) {
            errorCallback(error);
        }

    }
};

export const fetchCategories = () => {
    return async dispatch => {
        const response = await Categories.fetchCategories(localStorage.getItem(Users.sessionTokenHeader));
        if (response.status === 200) {
            const categories = await response.json();
            dispatch({type: FETCH_CATEGORIES, payload: _.mapKeys(categories, 'id')});
        } else {
            console.log(response);
        }
    }
};

export const fetchCategory = id => {
    return async dispatch => {
        const response = await Categories.fetchCategory(id, localStorage.getItem(Users.sessionTokenHeader));
        if (response.status === 200) {
            const category = await response.json();
            dispatch({type: FETCH_CATEGORY, payload: {[category.id]: category}});
        } else {
            console.log(response);
        }
    }
};

export const changeFilter = (name, value) => ({type: CHANGE_FILTER, payload: {[name]: value}});

export const resetFilter = () => ({type: RESET_FILTER});

export const changeSearchText = (query) => ({type: CHANGE_SEARCH_TEXT, payload: query});
