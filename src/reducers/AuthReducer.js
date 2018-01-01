import {AUTH_SUCCESS, AUTH_FAILURE, UNAUTH} from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, login: action.payload, isAuthenticated: true, error: ''};
        case AUTH_FAILURE:
            return {...state, login: '', isAuthenticated: false, error: action.payload};
        case UNAUTH:
            return {...state, login: '', isAuthenticated: false, error: ''};
        default:
            return state;
    }
}