import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import CategoriesReducer from "./CategoriesReducer";
import FilterReducer from "./FilterReducer"

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
    categories: CategoriesReducer,
    filter: FilterReducer
});

export default rootReducer;