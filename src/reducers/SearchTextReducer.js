import {CHANGE_SEARCH_TEXT} from "../actions/types";

export default (state = '', action) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return action.payload;
        default:
            return state;
    }
}