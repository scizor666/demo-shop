import {FETCH_PRODUCT, FETCH_PRODUCTS} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, ...action.payload};
        case FETCH_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}