import {SET_ROLE} from "../actions/types";

export default (state = 'User', action) => {
    switch (action.type) {
        case SET_ROLE:
            return action.payload;
        default:
            return state;
    }
}