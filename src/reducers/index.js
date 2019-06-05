//convina todos los reduces en un obj. export con combineReducers
//funciones puras solo dependen de los parametros que le ingresan y son faciles de testear
import { combineReducers } from 'redux';
import Order from './Order';

export default combineReducers({
    Order
  });
