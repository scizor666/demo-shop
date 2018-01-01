import Auth from '../utils/Auth';
import Products from '../utils/Products';
import {AUTH_SUCCESS, AUTH_FAILURE, UNAUTH, FETCH_PRODUCTS} from './types';
import _ from 'lodash';

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