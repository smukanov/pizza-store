import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import filterReducer from "./filterReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    items: itemsReducer,
    categories: categoriesReducer,
})

export default rootReducer;