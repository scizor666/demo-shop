import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import CategoriesReducer from "./CategoriesReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
    categories: CategoriesReducer
});

export default rootReducer;