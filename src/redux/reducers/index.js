import { combineReducers } from 'redux';
import products from './product';
import theme from './theme'

export default combineReducers({
  products,
  theme
});