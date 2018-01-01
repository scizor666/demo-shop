import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer
});

export default rootReducer;