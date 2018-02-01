import {SET_PRODUCT_MODAL_OPEN} from "../actions/types";

export default (state = false, action) => {
    switch (action.type) {
        case SET_PRODUCT_MODAL_OPEN:
            return action.payload;
        default:
            return state;
    }
}