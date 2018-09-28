import {ActionTypes} from "../../constants/ActionTypes";

export const mostSearchAction = () => {
  return {
    type: ActionTypes.MOST_SEARCH_REQUEST
  }
}

export const newRoomAction = () => {
  return {
    type: ActionTypes.ROOM_NEW_REQUEST
  }
}