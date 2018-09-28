import {ActionTypes} from "../../constants/ActionTypes";

const searchReducer = (search = [], action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return true
    //return modelProducts
    default:
      return false;
  }

};

export default searchReducer;