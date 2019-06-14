import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import state from './initialState';

// con esto creamos el almacen y estados inicial
export default createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );