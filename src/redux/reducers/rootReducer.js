import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    items: itemsReducer,
})

export default rootReducer;