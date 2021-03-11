import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import userAuthReducer from './reducers/userAuthReducer';

// FOR REDUX DEV TOOL WITH ADVANCED CONFIGRATIONS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  userAuth: userAuthReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store
;
