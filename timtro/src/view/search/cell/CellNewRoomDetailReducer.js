import {ActionTypes} from "../../../constants/ActionTypes";
import {modelRoomNew} from "../Model";

const roomNewReducer = (mostSearch = modelRoomNew, action) => {
  switch (action.type) {
    case ActionTypes.ROOM_NEW_SUCCESSED:
      return modelRoomNew
    case ActionTypes.ROOM_NEW_FAILED:
      return modelRoomNew
    //return modelProducts
    default:
      return modelRoomNew;
  }

};

export default roomNewReducer;