import {FETCH_CATEGORY, FETCH_CATEGORIES} from '../actions/types';

export default (state = {'-1': {id: -1, name: 'None'}}, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, ...action.payload};
        case FETCH_CATEGORY:
            return {...state, ...action.payload};
        default:
            return state;
    }
}