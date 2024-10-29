import { combineReducers } from "redux";
import { productRrducers } from "./productReducers";

const reducers = combineReducers({
    allproducts : productRrducers
})

export default reducers;