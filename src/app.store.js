import { createStore, applyMiddleware } from 'redux';
import allReducer from './all.reducer';
import thunk from 'redux-thunk';

const AppStore = createStore(allReducer, applyMiddleware(thunk));

export default AppStore;