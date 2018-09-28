import { AsyncStorage } from 'react-native'
import {API} from "../../../networking/API";

function* cellNewRoomDetailAPI() {
  const response = yield fetch(API.baseURL + API.mostSearch, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': yield AsyncStorage.getItem('token')
    },
  });
  const resJson = yield response.json()
  return resJson
}

export default cellNewRoomDetailAPI