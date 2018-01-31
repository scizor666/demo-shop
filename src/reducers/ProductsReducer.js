import {
    UPDATE_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCT, FETCH_PRODUCTS,
    FETCH_PRODUCTS_WITH_REPLACEMENT, PUT_PRODUCT
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, ...action.payload};
        case FETCH_PRODUCTS_WITH_REPLACEMENT:
            return action.payload;
        case FETCH_PRODUCT:
            return {...state, ...action.payload};
        case PUT_PRODUCT:
            return {...state, ...action.payload};
        case UPDATE_PRODUCT:
            return {...state, ...action.payload};
        case DELETE_PRODUCT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}