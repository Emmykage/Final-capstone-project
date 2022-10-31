import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import motocycleReducer from './motocycles/motocycles';
import userReducer from './users/users';

const rootReducer = combineReducers({
  motocycles: motocycleReducer,
  user: userReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
