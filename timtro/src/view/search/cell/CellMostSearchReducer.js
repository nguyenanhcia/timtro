import {ActionTypes} from "../../../constants/ActionTypes";
import {modelMostSearch} from "../Model";

const mostSearchReducer = (mostSearch = modelMostSearch, action) => {
  switch (action.type) {
    case ActionTypes.MOST_SEARCH_SUCCESSED:
      return modelMostSearch
    case ActionTypes.MOST_SEARCH_FAILED:
      return modelMostSearch
    //return modelProducts
    default:
      return modelMostSearch;
  }

};

export default mostSearchReducer;