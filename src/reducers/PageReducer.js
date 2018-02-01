import {SET_PAGE_NUMBER} from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case SET_PAGE_NUMBER:
            return action.payload;
        default:
            return state;
    }
}