import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import CategoriesReducer from "./CategoriesReducer";
import FilterReducer from "./FilterReducer"
import SearchTextReducer from "./SearchTextReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
    categories: CategoriesReducer,
    filter: FilterReducer,
    query: SearchTextReducer
});

export default rootReducer;