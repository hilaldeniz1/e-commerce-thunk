import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducer";
import { basketReducer } from "./reducers/basketReducer";
import thunk from "redux-thunk";

// reducerları birlestırme
const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});

// store u olusturma ve export etme
export default createStore(rootReducer, applyMiddleware(thunk));
