import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import filterReducer from "./filterReducer";
import itemsReducer from "./itemsReducer";
import orderReducer from "./orderReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    shop: shopReducer,
    orders: orderReducer,
})

export default rootReducer;