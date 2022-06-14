import { combineReducers } from "redux";

import shoppingReducer from "./shoppingReducer";

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;
