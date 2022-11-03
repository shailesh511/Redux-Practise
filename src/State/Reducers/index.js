import { combineReducers } from "redux";
import amountReducer from "./amountReducer"

const reducers = combineReducers({
    amount:amountReducer  //this is our state
})


export default reducers;