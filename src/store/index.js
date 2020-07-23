import {combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';

let reducers = combineReducers({});

const store = () =>{
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();