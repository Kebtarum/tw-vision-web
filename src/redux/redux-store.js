import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
const { combineReducers, createStore, applyMiddleware } = require("redux");



let reducers = combineReducers({
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store;
export default store;