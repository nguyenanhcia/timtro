import {combineReducers} from 'redux';
import searchReducer from "../view/search/SearchReducer";

const rootReducer = combineReducers({
  searchReducer
});

export default rootReducer