import {CHANGE_FILTER, RESET_FILTER} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {...state, ...action.payload};
        case RESET_FILTER:
            return {};
        default:
            return state;
    }
}