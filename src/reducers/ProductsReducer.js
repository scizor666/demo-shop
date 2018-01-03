import {FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCTS_WITH_REPLACEMENT} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, ...action.payload};
        case FETCH_PRODUCTS_WITH_REPLACEMENT:
            return action.payload;
        case FETCH_PRODUCT:
            return {...state, ...action.payload};
        default:
            return state;
    }
}