import {combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import motivation from './motivationReducer';
import ownGoals from './ownGoalsReducer';

let reducers = combineReducers({motivation,ownGoals});

const store = () =>{
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();