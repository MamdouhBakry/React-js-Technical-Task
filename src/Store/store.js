import { createStore, applyMiddleware } from 'redux';
import reducers from "./Reducers/combineReducers";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;