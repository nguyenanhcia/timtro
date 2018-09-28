import {combineReducers} from 'redux';
import searchReducer from "../view/search/SearchReducer";
import mostSearchReducer from "../view/search/cell/CellMostSearchReducer";
import roomNewReducer from "../view/search/cell/CellNewRoomDetailReducer";

const rootReducer = combineReducers({
  searchReducer,
  mostSearchReducer,
  roomNewReducer
});

export default rootReducer