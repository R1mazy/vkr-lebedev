import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import courseReducer from './reducers/courseReducer'

const rootReducer = combineReducers({
    courses: courseReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
