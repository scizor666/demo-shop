import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import CategoriesReducer from "./CategoriesReducer";
import FilterReducer from "./FilterReducer"
import SearchTextReducer from "./SearchTextReducer";
import RoleReducer from './RoleReducer';
import PageReducer from "./PageReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
    categories: CategoriesReducer,
    filter: FilterReducer,
    query: SearchTextReducer,
    role: RoleReducer,
    page: PageReducer,
});

export default rootReducer;